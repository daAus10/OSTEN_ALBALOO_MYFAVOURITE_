import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/content",
    pathMatch: "full"
  },
  {
    path: "content",
    component: ContentListComponent
  },
  {
    path: "content/:id",
    component: DetailedViewComponent,
  },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
