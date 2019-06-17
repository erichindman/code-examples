export default function dragDefine(elem) {

	elem.setAttribute('draggable', 'true');

	elem.addEventListener('dragend', () => {

		const {clientX, clientY} = event;
		const target = document.elementFromPoint(clientX, clientY);

		if (target.closest('li')) {
			target.closest('li').before(elem);
		}
		else if (target.closest('.todo_list') || target.closest('.comp_list')) {
			target.appendChild(elem);
		}
	});
}
