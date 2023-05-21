import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: ':id', component: NewsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
