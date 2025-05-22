import { Component, OnInit, OnDestroy } from '@angular/core'
import { TrackService } from '@modules/tracks/services/track.service'
import { TrackModel } from '@app/core/models/track.model'
import { SectionGenericComponent } from "@shared/components/section-generic/section-generic.component"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  private subscriptions: Subscription[] = []

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  /**
   * Carga el TOP 5 tracks de la API
   * @returns {void}
   */
  loadDataAll(): void {
    const sub1$ = this.trackService.getAllTracks().subscribe({
      next: (respuesta: TrackModel[]) => this.tracksTrending = respuesta.slice(0, 5),
      error: err => console.error('🔴👉 Error al cargar los tracks', err)
    })
    this.subscriptions.push(sub1$)
  }

  /**
   * Carga tracks de la API en modo random
   * @returns {void}
   */
  loadDataRandom(): void {
    const sub2$ = this.trackService.getRandomTracks().subscribe({
      next: (respuesta: TrackModel[]) => this.tracksRandom = respuesta,
      error: err => console.error('🔴👉 Error al cargar los tracks random', err)
    })
    this.subscriptions.push(sub2$)
  }

  /**
   * Destruye los observables de homePage
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
