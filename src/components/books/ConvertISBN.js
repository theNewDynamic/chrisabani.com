//  GENERATE ISBN10 from ISBN13
export function GeneratedISBN(isbn13) {

	var isbn = String(isbn13).substring(3, 12)

	let sum = 0;
	let mul = 10;

	for (let i = 0; i < 9; i++) {
		sum = sum + (
			mul * parseInt(isbn[i])
		);
		mul -= 1;
	}

	let checkDig = 11 - (sum % 11);

	if (checkDig == 10) { checkDig = "X"; }
	else if (checkDig == 11) { checkDig = 0; }

	let isbn10 = isbn + checkDig;

	return isbn10;

}
