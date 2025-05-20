import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {
  mockCover:any = {
    cover: 'https://tudosobreprodutos.com.br/min/cd-acdc-highway-to-hell.jpg',
    album: 'Highway to Hell',
    name: 'Highway to Hell'
  }
  constructor() {}

  ngOnInit(): void {}
}
