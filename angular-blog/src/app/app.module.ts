//ng serve --host 0.0.0.0
//npm start &
//ng serve --host 0.0.0.0 &
//open -a Google\ Chrome --args --disable-web-security --user-data-dir

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
