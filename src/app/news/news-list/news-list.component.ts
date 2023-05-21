import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { News, NewsList } from '../model/article';
import { Observable, map } from 'rxjs';
import { NewsService } from '../services/news.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

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
  isShowLoader: boolean = false;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {


  }




  ngOnInit(): void {
    this.dataSource = [];
    let id=this.route.snapshot.params['id'];
    console.log(id);
    this.route.paramMap.subscribe((inbox:any) => {
      console.log('inbox', inbox);
      inbox?.params?.id == undefined ? this.getNews('all') : this.getNews(inbox?.params?.id);
    });
    


  }

  getNews(categories: string) {
    this.isShowLoader = true;
    this.newsService.getNews(categories).subscribe((res: NewsList) => {
      if (res) {
        this.newsList = res.data as News[];
        this.dataSource = this.newsList.slice(this.startIndex, this.endIndex);
        this.paginationLength = this.newsList.length;
        this.isShowLoader = false;
      }
    }, err => {
      console.log(err);
      this.isShowLoader = false;
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


