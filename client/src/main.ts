import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommentFeedModule } from './app/commentfeed.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(CommentFeedModule);


