import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';  
import { MultimediaService } from '@app/shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover:TrackModel = {
    idd: 0,
    name: '',
    album: '',
    cover: '',
    url: ''
  }

  listaObservables$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) { 
  }

  ngOnInit() {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (track: TrackModel) => { this.mockCover = track}
    );
    this.listaObservables$ = [observer1$] 
  }

  ngOnDestroy() {
    this.listaObservables$
        .forEach((obs: Subscription) => {obs.unsubscribe()}
    );
  }
}
