import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import { ImgBrokenDirective } from '@app/shared/directives/img-broken.directive';

@Component({
  selector: 'app-card-player',
  imports: [NgIf, NgClass, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'big';
  @Input() track!: TrackModel;
  
  constructor() {}
  ngOnInit(): void {}

}
