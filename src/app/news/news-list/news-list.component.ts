import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { News, NewsList } from '../model/article';
import { Observable, map } from 'rxjs';
import { NewsService } from '../services/news.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {

  newsList!: News[];
  paginationLength: number = 0;
  dataSource!: News[];
  startIndex = 0;
  endIndex = 10;
  pageSize: number = 10;

  constructor(private newsService: NewsService) {


  }




  ngOnInit(): void {
    this.dataSource = [];
    this.newsService.getNews('all').subscribe((res: NewsList) => {
      if (res) {
        this.newsList = res.data as News[];
        this.dataSource = this.newsList.slice(this.startIndex, this.endIndex);
        this.paginationLength = this.newsList.length;
      }
    }, err => {
      console.log(err);

    })

  }

  changePage(event: any) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    this.dataSource = this.newsList.slice(startIndex, endIndex);

    console.log(this.newsList);
    console.log(this.dataSource);
  }


}


