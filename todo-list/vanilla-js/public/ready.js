
import createLi from './create_li.js';

function onReady () {
	const entryForm = document.querySelector('.entry_form')
	const typeItem = entryForm.querySelector('.type_item');
	const todoList = document.querySelector('.todo_list');
	
	// Creates a default state for previewing app behavior
	const defaults = ['Watch TV', 'Buy Watch', 'Watch Watchmen']
	defaults.forEach((item) => {
		createLi(todoList, item);
	})
	entryForm.onsubmit = event => {
		event.preventDefault();
		const typeValue = typeItem.value;

		if (typeValue === '') {
			typeItem.setAttribute('placeholder', 'please enter a value.');
		} else {
			createLi(todoList, typeValue);
			typeItem.value = '';
		}
		typeItem.focus();
	}
}

document.addEventListener('DOMContentLoaded', onReady);
