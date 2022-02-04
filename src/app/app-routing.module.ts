import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },
  { path: '' , redirectTo: 'comments' , pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
