document.addEventListener('DOMContentLoaded', function () {
	document.body.appendChild(
		document.createElement('p')
	).appendChild(
		document.createTextNode('Greetings, ' + navigator.vendor + ' browser!')
	);
})