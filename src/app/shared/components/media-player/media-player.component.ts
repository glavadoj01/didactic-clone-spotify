import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';  

@Component({
  selector: 'app-media-player',
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {
  mockCover:TrackModel = {
    _id: 1,
    name: 'Highway to Hell',
    album: 'Highway to Hell',
    cover: 'https://tudosobreprodutos.com.br/min/cd-acdc-highway-to-hell.jpg',
    url: 'https://www.youtube.com/watch?v=l482T0yNkeo'
  }
  constructor() {}

  ngOnInit(): void {}
}
