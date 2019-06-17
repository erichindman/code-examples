import dragDefine from './drag_define.js';

export default function createLi(dest, itemContent, destOnComplete) {
	const li = document.createElement('li');
	const compButton = document.createElement('button');
	const delButton = document.createElement('button');

	compButton.onclick = () => {
		destOnComplete.append(li);
	}

	delButton.onclick = () => {
		li.remove();
	}

	compButton.textContent = '√';
	compButton.className = 'comp_button';

	delButton.textContent = '×';
	delButton.className = 'del_button';

	li.textContent = itemContent;
	li.append(compButton, delButton);

	dragDefine(li);

	dest.append(li);
}
