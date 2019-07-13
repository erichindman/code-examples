function onReady() {
	// finds user input field, input item, and inital to-do list.
	const entryForm = document.querySelector('.entry_form');
	const typeItem = entryForm.querySelector('input');
	const todoList = document.querySelector('.todo_list');

	const createLi = (content) => {
		const li = document.createElement('list-item');
		const label = li.shadowRoot.querySelector('label');
		label.append(document.createTextNode(content));
		// appends <list-item> to the to-do list <ul>.
		todoList.append(li);
	}
	const defaults = ['Watch TV', 'Buy Watch', 'Watch Watchmen'];
			defaults.forEach((item) => {
				createLi(item)
			});

	entryForm.onsubmit = event => {
		event.preventDefault();

		// creates text with user inputted value.
		const typeValue = typeItem.value;

		// if user provided no input, nothing happens, save a gentle reminder.
		if (typeValue === '') {
			typeItem.setAttribute('placeholder', 'please enter a value:');
		} else {
			// creates new <list-item> **AS DEFINED ABOVE**
			createLi(typeValue);

			

			// changes input field placeholder to previously entered value.
			typeItem.setAttribute('placeholder', `${typeItem.value}`);

			// clears the input field.
			typeItem.value = '';
		}

		// restores focus to the input field, for a better user experience!
		typeItem.focus();
	};
}

// waits for document to load before parsing.
document.addEventListener('DOMContentLoaded', onReady);
