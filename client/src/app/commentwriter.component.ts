import { Component } from '@angular/core';

import { Comment } from './comment';
import { CommentService } from './comment.service';

@Component({
	selector: 'comment-writer',
	template: require('./commentwriter.component.html'),
	styles: [require('./commentwriter.component.css')]
})

export class CommentWriterComponent {

    comment: Comment = new Comment("","");

	constructor(private commentService: CommentService) { }

	submitMessage(): void {
		this.commentService.submitComment(this.comment)
		this.comment.clearFields()
	}
}