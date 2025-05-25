import { Component } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import { getAllTracks$ } from '@app/modules/tracks/services/track.service';
import { PlayListBodyComponent } from '@app/shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@app/shared/components/play-list-header/play-list-header.component';

@Component({
  selector: 'app-favorites-pages',
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-pages.component.html',
  styleUrl: './favorites-pages.component.css'
})
export class FavoritesPagesComponent {

  tracks: TrackModel[] = []

  constructor() {
    getAllTracks$().subscribe({
      next: (respuesta: TrackModel[]) => this.tracks = respuesta,
      error: err => console.error('🔴👉 Error al cargar los tracks', err)
    })
  }
}
