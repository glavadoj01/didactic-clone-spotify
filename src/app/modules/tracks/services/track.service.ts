import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL: string = environment.api;

  constructor(private httpVar: HttpClient) { }
  

  /**
   * Get all tracks
   * @returns Observable<any>
   */
  getAllTracks(): Observable<TrackModel[]> {
    return this.httpVar.get<{ data: TrackModel[] }>(`${this.URL}/tracks`)
      .pipe(map(response => response.data))
  }

  getRandomTracks(): Observable<TrackModel[]> {
    return this.httpVar.get<{ data: TrackModel[] }>(`${this.URL}/tracks`).pipe(
      map(response => {
        const shuffled = [...response.data];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      })
    )
  }
}
