export class Comment {
	text: string;
	email: string;

	constructor(text: string, email: string) {
		this.text = text
		this.email = email
	}

	clearFields(): void {
		this.text = ''
		this.email = ''
	}
}