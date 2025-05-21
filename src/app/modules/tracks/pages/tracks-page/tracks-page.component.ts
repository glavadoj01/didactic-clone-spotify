import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionGenericComponent } from "@shared/components/section-generic/section-generic.component";
import { TrackModel } from '@app/core/models/track.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listaObservables: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    const observer1$: Subscription = this.trackService.dataTracksTrending$
      .subscribe(data => {
        this.tracksTrending = data
        this.tracksRandom = [...data]
      })
    
    const observer2$: Subscription = this.trackService.dataTracksRandom$
      .subscribe(data => {
        this.tracksRandom.push(...data)
      })


    this.listaObservables.push(observer1$, observer2$)
  }

  ngOnDestroy(): void {
    this.listaObservables.forEach(u => u.unsubscribe())
  }
}
