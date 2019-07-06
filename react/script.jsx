function ToDoApp () {
	const input = React.createRef();

	const [items, setItems] = React.useState([
		{text: 'Buy Watch', completed: false},
		{text: 'Watch TV', completed: false},
		{text: 'Watch Watchmen', completed: false},
	]);

	const handleSubmit = event => {
		event.preventDefault();
		if (input.current.value === '') { /* Do Nothing */} 
		else {
			setItems([
				...items,
				{text: input.current.value, completed: false},
			]);
	
			input.current.value = '';
		}
	}

	const removeItem = event => {
		const itemIndex = event.target.id;
		const newState = [...items]
		newState.splice(itemIndex, 1);
		setItems(newState);
	}

	const toggleItem = event => {
		const itemIndex = event.target.parentNode.id;
		items[itemIndex].completed = !items[itemIndex].completed;
		setItems([...items]);
	}

	return <>
		<h1>ToDos:</h1>
		<form className="entry_form" onSubmit={handleSubmit}>
			<input ref={input} />
			<button type='submit'>Add Item</button>
		</form>
		<ul className="todo_list">
			{items.map((item, index) => {
				return <li id={index} key={index} className={item.completed ? 'completed' : ''}>
					<button className='complete-button' onClick={toggleItem}>√</button>
					{item.text}
					<button className='delete-button' onClick={removeItem}>x</button>
				</li>;
			})}
		</ul>
	</>;
}

ReactDOM.render(<ToDoApp />, document.getElementById('root'));