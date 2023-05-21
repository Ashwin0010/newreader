import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsComponent } from './news/news-list/news/news.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: ':id', component: NewsListComponent},
  {path: 'categories/:id', component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
