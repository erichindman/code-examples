function onReady() {
	// finds user input field, input item, and inital to-do list.
	const typeItem = document.querySelector(".type-item");
	const entryForm = document.querySelector(".entry-form");
	const todoList = document.querySelector(".todo_list");

	entryForm.onsubmit = event => {
		event.preventDefault();

		// creates text with user inputted value.
		const typeValue = typeItem.value;

		// if user provided no input, nothing happens, save a gentle reminder.
		if (typeValue === "") {
			typeItem.setAttribute("placeholder", "please enter a value.");
		} else {
			// creates new <list-item> **AS DEFINED ABOVE**.

			const li = document.createElement("list-item");
			const label = li.shadowRoot.querySelector('label');
			const compButton = label.querySelector('.complete-button')
			label.insertBefore(document.createTextNode(typeValue), compButton);
			

			// appends <list-item> to the to-do list <ul>.
			todoList.append(li);

			// changes input field placeholder to previously entered value.
			typeItem.setAttribute("placeholder", `${typeItem.value}`);

			// clears the input field.
			typeItem.value = "";
		}

		// restores focus to the input field, for a better user experience!
		typeItem.focus();
	};
}

// waits for document to load before parsing.
document.addEventListener("DOMContentLoaded", onReady);
