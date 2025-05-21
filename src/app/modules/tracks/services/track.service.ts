import { Injectable } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import { Observable, of } from 'rxjs';
import dataScr from "@app/data/tracks.json";



@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);

  dataTracksRandom$: Observable<TrackModel[]> = of([]);


  constructor() {
    this.dataTracksTrending$ = of(dataScr.data)

    this.dataTracksRandom$ = new Observable( observer => {
      const trackExtra: TrackModel = {
        "idd": 10,
        "name": "The Passenger",
        "album": "Lust for Life",
        "cover": "https://enlaceroto.com/img.jpg",
        "artist": {
            "name": "Iggy Pop",
            "nickname": "Iggy Pop",
            "nationality": "US"
        },
        "url": "http://localhost:3000/track-10.mp3"   
      }

      setTimeout(() => observer.next([trackExtra]), 5000)
    })
  }
}
