import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comment } from './comment';

@Injectable()
export class CommentService {

	constructor(private http: Http) { }

	private baseServerUrl = "http://localhost:4000/"
	private getCommentsUrl = this.baseServerUrl + "api/comments"
	private submitCommentUrl = this.baseServerUrl + "api/submit"

	private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

	getComments(): Promise<Comment[]> {
		return this.http.get(this.getCommentsUrl)
		           .toPromise()
		           .then(response => response.json().data as Comment[])
		           .catch(this.handleError);
	}

	submitComment(comment: Comment): void {
		let body = {
			email: comment.email,
			text: comment.text
		}
		this.http.post(this.submitCommentUrl, JSON.stringify(body), this.options)
					.toPromise()
					.then()
					.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
