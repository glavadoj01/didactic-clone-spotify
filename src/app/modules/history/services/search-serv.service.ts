import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@app/core/models/track.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchServService {

  private readonly URL = environment.api

  constructor(private httpRequest: HttpClient) { }

  searchTracks$(term: string): Observable<TrackModel[]> {
    return this.httpRequest.get<{ data: TrackModel[] }>(`${this.URL}/tracks?src=${term}`).pipe
      (map(r => r.data.filter
        ((track: TrackModel) => track.name.toLowerCase().includes(term.toLowerCase()))
      )
    )
  }

}
