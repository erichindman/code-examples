class ListItem extends HTMLElement {
	// find browser compatibility issues
	constructor() {
		super();

		// attaches open shadow DOM to 'list-item' custom element.
		const shadow = this.attachShadow({ mode: 'open' });

		shadow.appendChild(document.createElement('slot'));

		// adds inline styling to the otherwise inaccessible shadow DOM.
		shadow.appendChild(document.createElement('style')).textContent = `
		label {
			display: inline-block;
			width: 70%;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		.complete_button {
			color: lightgreen;
			margin: 0 10px 0 0;
		}
		.delete_button {
			color: lightcoral;
			float: right;
		}
		.complete_button, .delete_button {
			background-color: white;
			border: 0;
			border-radius: 50%;
			font-size: 1em;
		}
		.complete_button:hover, .complete_button:focus {
			outline: none;
			background-color: rgba(144, 238, 144, 0.4);
			color: white;
		}
		.delete_button:focus, .delete_button:hover {
			outline: none;
			background-color: rgba(240, 128, 128, 0.4);
			color: white;
		}
		.completed label {
			text-decoration: line-through;
			opacity: 0.3;
		}
		.completed .complete_button {
			background-color: rgba(144, 238, 144, 0.4);
			outline: none;
			color: white;
		}`;
	
		const compButton = document.createElement('button');
		const delButton = document.createElement('button');
		const li = document.createElement('li');
		const label = document.createElement('label');

		compButton.classList.add('complete_button');
		compButton.textContent = '✓';
		compButton.onclick = () => {
			li.classList.toggle('completed');
			this.blur();
		};
		
		delButton.classList.add('delete_button');
		delButton.textContent = '×';
		delButton.onclick = () => {
			this.remove();
		}

		// appends user content and functional buttons to the <li>.
		label.append(compButton, delButton);
		li.append(label, delButton);
		shadow.append(li);
	}

}

// defines the custom element '<list-item>'.
customElements.define('list-item', ListItem);
