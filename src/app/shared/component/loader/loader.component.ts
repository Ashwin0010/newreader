import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  template: `
    <div class="color"></div>
    <div class="spinner spinner_position">
      <div style="position: absolute;">
      <mat-progress-spinner
        class="example-margin"
        [color]="color"
        [mode]="mode"
        [value]="value">
    </mat-progress-spinner>
    </div>
    </div>
  `,
 styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  constructor() { }

  ngOnInit(): void {
    
  }

}
