import { Component, OnInit } from '@angular/core';
import { News, NewsList } from '../../model/article';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news!: News | undefined;
  newsList!: News[];
  dataSource!: News[];
  paginationLength!: number;
  isShowLoader: boolean = false;
  startIndex = 0;
  endIndex = 10;
  pageSize: number = 10;
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNews('all');
  }

  getNews(categories: string) {
    this.isShowLoader = true;
    let id11 = this.route.snapshot.params['id'];
    console.log(id11);
    this.news = JSON.parse(id11);
  }
}
