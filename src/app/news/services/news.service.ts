import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsList } from '../model/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(category: string): Observable<NewsList> {
    let url = `${environment.news}?category=${category}`
    return this.http.get<NewsList>(url);
  }

}
