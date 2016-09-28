import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CommentFeedComponent } from './commentfeed.component';
import { CommentWriterComponent } from './commentwriter.component';
import { CommentDisplayPaneComponent } from './commentdisplaypane.component';

import { CommentService } from './comment.service'

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ CommentFeedComponent, CommentWriterComponent, CommentDisplayPaneComponent ],
  bootstrap: [ CommentFeedComponent ],
  providers: [ CommentService ]
})

export class CommentFeedModule {

}


