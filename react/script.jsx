function ToDoApp () {
	const input = React.createRef();

	const state = [
		{text: 'One', completed: false},
		{text: 'Two', completed: false},
		{text: 'Three', completed: false},
	];

	const [items, setItems] = React.useState(state);

	const handleSubmit = event => {
		event.preventDefault();

		setItems([...items, {
			text: input.current.value,
			completed: false,
		}]);

		input.current.value = '';
	};

	const toggleItem = event => {
		const itemIndex = Number(event.target.className);

		items[itemIndex].completed = !items[itemIndex].completed;

		setItems([...items]);
	};

	const removeItem = event => {
		const itemIndex = Number(event.target.className);
		const newState = [...items];

		newState.splice(itemIndex, 1);

		setItems(newState);
	};

	return <>
		<h1>To-Do List:</h1>
		<form className="entry-form" onSubmit={handleSubmit}>
			<input ref={input} autoFocus/>
			<button type="submit">Add Item</button>
		</form>
		<ul className="todo-list">
			{items.map((item, index) => {
				return <li className={'comp-' + item.completed} key={index}>
					<label>
						<button className={index + ' complete-button'} onClick={toggleItem}>√</button>
						{item.text}
					</label>
					<button className={index + ' delete-button'} onClick={removeItem}>x</button>
				</li>
			})}
		</ul>
	</>
}

ReactDOM.render(<ToDoApp />, document.getElementById('root'));
