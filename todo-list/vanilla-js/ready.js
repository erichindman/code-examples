
import createLi from './create_li.js';

function onReady () {

	const entryForm = document.querySelector('.entry_form')
	const typeItem = entryForm.querySelector('.type_item');

	const todoList = document.querySelector('.todo_list');
	const compList = document.querySelector('.comp_list');

	entryForm.onsubmit = event => {

		const typeValue = typeItem.value;
		event.preventDefault();

		if (typeValue === '') {

			typeItem.setAttribute('placeholder', 'please enter a value.');

		} else {

			createLi(todoList, typeValue, compList);
			typeItem.value = '';

		}

		typeItem.focus();

	}
}

document.addEventListener('DOMContentLoaded', onReady);
