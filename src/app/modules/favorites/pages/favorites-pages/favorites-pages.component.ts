import { Component, OnInit } from '@angular/core';
import { PlayListBodyComponent } from '@app/shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@app/shared/components/play-list-header/play-list-header.component';

@Component({
  selector: 'app-favorites-pages',
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-pages.component.html',
  styleUrl: './favorites-pages.component.css'
})
export class FavoritesPagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}
