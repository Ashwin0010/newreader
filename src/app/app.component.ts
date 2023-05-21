import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'newsreader';

  newscategories: Array<string> = [];

  ngOnInit(): void {
    this.newscategories = ['business','sports','world','technology','startup','entertainment','science','automobile'];
  }
}
