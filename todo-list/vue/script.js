import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js';

function onReady () {
	new Vue({
		el: '#ToDoApp',
		data: {
			newItemValue: "",
			items: [
				{ text: 'One', completed: false },
				{ text: 'Two', completed: false },
				{ text: 'Three', completed: false },
			],
		},
		methods: {
			addItem () {
				this.items.push({
					text: this.newItemValue,
					completed: false,
				});
				this.newItemValue = '';
				this.$refs.itemInput.focus();

				console.log(this.items);
			},
			removeItem (index) {
				this.items.splice(index, 1);
			},
			toggleItem (index) {
				this.items[index].completed = !this.items[index].completed;
			},
			updateItem (index, event) {
				this.items[index].text = event.target.textContent;
			},
			editItem (index) {
				const label = this.$refs.text[index];
				const selection = window.getSelection();
				const range = document.createRange();

				label.contentEditable = true;
				label.focus();

				range.selectNodeContents(label);

				selection.removeAllRanges();
				selection.addRange(range);
			},
		},
	});
}
document.addEventListener('DOMContentLoaded', onReady);
