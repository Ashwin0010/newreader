import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { News, NewsList } from '../model/article';
import { Observable, map } from 'rxjs';
import { NewsService } from '../services/news.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {


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

  shareToFacebook(news: News) {
    let data = `${environment.url}/categories/${JSON.stringify(news)}`

    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(data);
    window.open(url, '_blank');
  }
  shareToTwitter(news: News) {
    let data = `${environment.url}/categories/${JSON.stringify(news)}`

    const url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
  }
    

  getLink(news:News) {
    // [routerLink]="['categories', news]"
    this.router.navigate(['categories', JSON.stringify(news)])
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


