import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrackModel } from '@app/core/models/track.model';
import { environment } from '@environments/environment';

const URL: string = environment.api;

/**
 * Funcion Http Injectable
 * @returns {Observable<TrackModel[]>} Observable con todas las tracks
 */
export const getAllTracks$ = (): Observable<TrackModel[]> => {
    return inject(HttpClient).get<{ data: TrackModel[] }>(`${URL}/tracks`)
    .pipe(map(response => response.data))
}

/**
 * Funcion Http Injectable
 * @returns {Observable<TrackModel[]>} Observable con tracks aleatorias
 */
export const getRandomTracks$ = (): Observable<TrackModel[]> => {
    return inject(HttpClient).get<{ data: TrackModel[] }>(`${URL}/tracks`).pipe(
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