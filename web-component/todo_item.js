

class ListItem extends HTMLElement {
	// find browser compatibility issues
	constructor() {
		super();

		// attaches open shadow DOM to 'list-item' custom element.
		const shadow = this.attachShadow({ mode: 'open' });

		shadow.appendChild(document.createElement('slot'));

		// adds inline styling to the otherwise inaccessible shadow DOM.
		shadow.appendChild(document.createElement('style')).textContent = `
		li {
			padding: 5px;
			background: none;
		}

		button {
			transition: background-color .5s ease;
			border-radius: 100%;
			box-shadow: 0 0 5px #000;
			margin: 0 0 0 15px;
		}

		button:hover {
			background-color: #84b9e67c;
		}

		.complete-button {
			color: green;
		}

		.complete-button:focus, .delete-button:focus {
			outline: none;
			background-color: #84b9e67c;
		}

		.delete-button {
			color: red;
		}`;
	
		const compButton = document.createElement('button');
		const delButton = document.createElement('button');
		const li = document.createElement('li');
		const label = document.createElement('label');

		compButton.classList.add('complete-button');
		compButton.textContent = '√';
		compButton.onclick = () => {
			this.classList.toggle('complete');
			this.blur();
		};
		
		delButton.classList.add('delete-button');
		delButton.textContent = '×';
		delButton.onclick = () => {
			this.remove();
		}

		// appends user content and functional buttons to the <li>.
		label.append(compButton);
		li.append(label, delButton);
		shadow.append(li);
	}

}

// defines the custom element '<list-item>'.
customElements.define('list-item', ListItem);
