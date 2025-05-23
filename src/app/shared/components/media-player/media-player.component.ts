import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { MultimediaService } from '@app/shared/services/multimedia.service';


@Component({
  selector: 'app-media-player',
  imports: [CommonModule , NgTemplateOutlet, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  constructor(public multimediaService: MultimediaService) {}

}
