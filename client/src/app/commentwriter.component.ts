import { Component } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comment } from './comment';

@Component({
	selector: 'comment-writer',
	template: require('./commentwriter.component.html'),
	styles: [require('./commentwriter.component.css')]
})

export class CommentWriterComponent {

	private getCommentsUrl = "http://localhost:4000/api/submit"
	private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    comment: Comment = new Comment('','');

	constructor(private http: Http) { }

	submitMessage(): void {
		let body = {
			email: this.comment.email,
			text: this.comment.text
		}
		this.comment.text = ''
		this.comment.email = ''
		console.log(JSON.stringify(body))
		this.http.post(this.getCommentsUrl, JSON.stringify(body), this.options)
					.toPromise()
					.then(function() {console.log("Got Response")})
	}
}