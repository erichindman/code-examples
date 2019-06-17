export default function dragDefine(elem) {

	elem.setAttribute('draggable', 'true');

	elem.addEventListener('dragend', () => {

		const {clientX, clientY} = event;
		const target = document.elementFromPoint(clientX, clientY);

		if (target.closest('list-item')) {
			target.closest('list-item').before(elem);
		}
		else if (target.closest('super-list')) {
			target.appendChild(elem);
		}
	});
}
