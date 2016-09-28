import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Comment } from './comment';
import { CommentService } from './comment.service'



@Component({
	selector: 'comment-display-pane',
	template: require('./commentdisplaypane.component.html'),
	styles: [require('./commentdisplaypane.component.css')]
})

export class CommentDisplayPaneComponent implements OnInit{
	comments: Comment[] = [];

	filterValue = ''

	constructor(private commentService: CommentService) { }

	ngOnInit(): void {
		this.updateDisplayedComments("Start Time")
		let timer = Observable.timer(2000,1000);
		timer.subscribe(time => this.updateDisplayedComments(""));
	}

	updateDisplayedComments(bogusVariable: string): void {
		console.log("Updating")
		this.commentService.getComments()
				.then(comments => this.comments = comments);
	}

	dontFilterComment(comment: Comment): boolean {
		let appearsInText = comment.text.includes(this.filterValue);
    	let appearsInEmail = comment.email.includes(this.filterValue);
    	return appearsInText || appearsInEmail
	}

}