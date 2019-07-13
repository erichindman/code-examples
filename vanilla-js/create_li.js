
export default function createLi(destination, itemContent) {
	const li = document.createElement('li');
	const label = document.createElement('label');
	const compButton = document.createElement('button');
	const delButton = document.createElement('button');

	compButton.onclick = () => {
		li.classList.toggle('completed');
		compButton.blur();
	}
	delButton.onclick = () => {
		li.remove();
	}

	compButton.textContent = '✓';
	compButton.className = 'complete_button';

	delButton.textContent = '×';
	delButton.className = 'delete_button';

	
	label.append(compButton, itemContent);	
	li.append(label, delButton);
	destination.append(li);
}
