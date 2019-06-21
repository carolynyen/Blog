import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: 'edit/:id', component: EditComponent },
  { path: 'preview/:id', component: PreviewComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ],
  providers: [

  ],
  declarations: []
})
export class AppRoutingModule { }
