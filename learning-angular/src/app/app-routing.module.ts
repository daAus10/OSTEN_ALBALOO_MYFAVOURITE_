import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';


const routes: Routes = [
  {
    path: "content",
    component: ContentListComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], // this hooks up our routes so they work
exports: [RouterModule]
})
export class AppRoutingModule { }
