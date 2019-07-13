import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.min.js';

function onReady () {
	new Vue({
		el: '#todo-list',
		data: {
			placeholder: 'Watch Watchmen Watching a Watch',
			newItemValue: "",
			items: [
				{ text: 'Watch TV', completed: false },
				{ text: 'Buy Watch', completed: false },
				{ text: 'Watch Watchmen', completed: false },
			],
		},
		methods: {
			addItem () {
				if (this.newItemValue === '') {
					this.placeholder = 'Please enter a value:';
				} else {
					this.items.push({
						text: this.newItemValue,
						completed: false,
					});
					this.newItemValue = '';
				}
				this.$refs.itemInput.focus();
			},
			removeItem (index) {
				this.items.splice(index, 1);
			},
			toggleItem (index) {
				this.items[index].completed = !this.items[index].completed;
			},		
		},
	});
}
document.addEventListener('DOMContentLoaded', onReady);
