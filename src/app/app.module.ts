import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import  {routes} from  "./app.routes";
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AboutComponent,
    HomeComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){
    console.log("Root Module is loaded.");
  }
}
