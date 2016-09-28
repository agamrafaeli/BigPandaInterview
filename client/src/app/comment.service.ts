import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comment } from './comment';

@Injectable()
export class CommentService {

	private getCommentsUrl = "http://localhost:4000/api/comments"
	private headers = new Headers({'Content-Type': 'application/json'});

	commentList: Comment[] = []

	constructor(private http: Http) { }

	getComments(): Promise<Comment[]> {
		return this.http.get(this.getCommentsUrl)
		           .toPromise()
		           .then(response => response.json().data as Comment[])
		           .catch(this.handleError);
		        
	}

	submitComment(): void {
		/* To implement with server */
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
