/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

/* Main App */
import { AppComponent } from './app.component';

/* Feed App */
import { FeedAppComponent } from './feed-app/feed.component';

/* Todo App */
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [AppComponent, FeedAppComponent, TodoAppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
