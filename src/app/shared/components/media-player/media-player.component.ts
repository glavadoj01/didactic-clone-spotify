import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MultimediaService } from '@app/shared/services/multimedia.service';


@Component({
  selector: 'app-media-player',
  imports: [CommonModule , NgTemplateOutlet, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  @ViewChild('progressBar', {static: false}) progressBar!: ElementRef<HTMLSpanElement>

  public multimediaService = inject(MultimediaService)

  constructor() {}

  handlePosition(entrada: MouseEvent) {
    const bar: HTMLElement = this.progressBar.nativeElement
    const rect = bar.getBoundingClientRect()
    const clickX = entrada.clientX - rect.left // posición relativa al inicio de la barra
    const width = rect.width
    const porcentaje = clickX / width // valor entre 0 y 1
    
    this.multimediaService.seekAudio(porcentaje)
  }
}
