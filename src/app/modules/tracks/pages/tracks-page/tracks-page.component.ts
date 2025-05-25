import { Component, Input } from '@angular/core'
import { TrackModel } from '@app/core/models/track.model'
import { SectionGenericComponent } from "@shared/components/section-generic/section-generic.component"
import { getAllTracks$, getRandomTracks$ } from '@modules/tracks/services/track.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracks-page',
  imports: [SectionGenericComponent, CommonModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  @Input() currentUser: any
  
  tracksTrending: TrackModel[] = []
  tracksRandom: TrackModel[] = []

  constructor() {
    getAllTracks$().subscribe({
      next: (respuesta: TrackModel[]) => this.tracksTrending = respuesta.slice(0, 5),
      error: err => console.error('🔴👉 Error al cargar los tracks', err)
    })

    getRandomTracks$().subscribe({
      next: (respuesta: TrackModel[]) => this.tracksRandom = respuesta,
      error: err => console.error('🔴👉 Error al cargar los tracks random', err)
    })
  }

}
