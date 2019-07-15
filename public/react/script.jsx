function ToDoApp () {
	const input = React.createRef();
	const [placeholder, setPlaceholder] = React.useState('Watch Watchmen Watching a Watch');
	const [items, setItems] = React.useState([
		{text: 'Buy Watch', completed: false},
		{text: 'Watch TV', completed: false},
		{text: 'Watch Watchmen', completed: false},
	]);

	const handleSubmit = event => {
		event.preventDefault();
		if (input.current.value === '') { 
			setPlaceholder('Please Enter a Value:');
		} 
		else {
			setItems([
				...items,
				{text: input.current.value, completed: false},
			]);
			setPlaceholder(input.current.value);
			input.current.value = '';
		}
		input.current.focus();
	}

	const removeItem = event => {
		const itemIndex = event.target.parentNode.id;
		console.log(itemIndex);
		const newState = [...items];
		newState.splice(itemIndex, 1);
		setItems(newState);
	}

	const toggleItem = event => {
		const itemIndex = event.target.parentNode.parentNode.id;
		items[itemIndex].completed = !items[itemIndex].completed;
		setItems([...items]);
	}

	return <>
		<h1>ToDos:</h1>
		<ul className="todo_list">
			{items.map((item, index) => {
				return <li id={index} key={index} className={item.completed ? 'completed' : ''}>
					<label>
						<button className='complete_button' onClick={toggleItem}>✓</button>
						{item.text}
					</label>
					<button className='delete_button' onClick={removeItem}>×</button>
				</li>;
			})}
		</ul>
		<form className="entry_form" onSubmit={handleSubmit}>
			<input autoFocus placeholder={placeholder} ref={input} />
			<button type='submit'>➣</button>
		</form>
	</>;
}

ReactDOM.render(<ToDoApp />, document.getElementById('todo-list'));