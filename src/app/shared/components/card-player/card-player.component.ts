import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import { ImgBrokenDirective } from '@app/shared/directives/img-broken.directive';
import { MultimediaService } from '@app/shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  imports: [NgIf, NgClass, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input({required:true}) mode: 'small' | 'big' = 'big';
  @Input({required:true}) track!: TrackModel;
  
  private multimediaService = inject(MultimediaService)

  constructor() { }

  ngOnInit(): void {}

  sendTrack(trackSend: TrackModel) {
    this.multimediaService.trackInfo$.next(trackSend)
  }
}
