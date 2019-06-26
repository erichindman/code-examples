
function ToDoApp () {
	const input = React.createRef('add Item');

	const state = [
		{text: 'One', completed: false},
		{text: 'Two', completed: false},
		{text: 'Three', completed: false},
	];

	const [items, setItems] = React.useState(state);

	handleSubmit = event => {
		event.preventDefault();
		setItems([...items, {
			text: input.current.value,
			completed: false,
		}]);

		input.current.value = '';
	}

	toggleItem = event => {
		const itemIndex = Number(event.target.className);
		items[itemIndex].completed = !items[itemIndex].completed;
		setItems([...items]);
	}

	removeItem = event => {
		const itemIndex = Number(event.target.className);
		const newState = [...items];
		newState.splice(itemIndex, 1);
		setItems(newState);
	}

	return <>
		<form onSubmit={handleSubmit}>
			<input ref={input} autoFocus/>
			<button type="submit">Add Item</button>
		</form>
		<ul>
			{items.map((item, index) => {
				return <li className={'comp' + item.completed} key={index}>
					<label>
						<button className={index} onClick={toggleItem}>√</button>
						{item.text}
					</label>
					<button className={index} onClick={removeItem}>x</button>
				</li>
			})}
		</ul>	
	</>;	
}
ReactDOM.render(<ToDoApp />, document.getElementById('root'));
