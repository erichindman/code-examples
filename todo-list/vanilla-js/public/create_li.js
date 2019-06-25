
export default function createLi(destination, itemContent) {
	const li = document.createElement('li');
	const label = document.createElement('label');
	const compButton = document.createElement('button');
	const delButton = document.createElement('button');

	compButton.onclick = () => {
		li.classList.toggle('complete');
		compButton.blur();
	}
	delButton.onclick = () => {
		li.remove();
	}

	compButton.textContent = '√';
	compButton.className = 'comp_button';

	delButton.textContent = '×';
	delButton.className = 'del_button';

	label.textContent = itemContent;
	label.append(compButton)
	li.append(label, delButton);
	destination.append(li);
}
