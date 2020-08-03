export const sorteia = (size) => {
	let array = new Array(size);
	array.fill(0);
	array.map((num, index) => {
		let gerado =
			Math.floor(Math.random() * (Math.floor(60) - Math.ceil(1) + 1)) +
			Math.ceil(1);

		while (array.indexOf(gerado) >= 0) {
			gerado =
				Math.floor(
					Math.random() * (Math.floor(60) - Math.ceil(1) + 1)
				) + Math.ceil(1);
		}

		array[index] = gerado;
	});

	array = array.sort((a, b) => {
		return a - b;
	});

	return array;
};
