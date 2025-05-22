import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import { TrackService } from '@app/modules/tracks/services/track.service';
import { PlayListBodyComponent } from '@app/shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@app/shared/components/play-list-header/play-list-header.component';

@Component({
  selector: 'app-favorites-pages',
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-pages.component.html',
  styleUrl: './favorites-pages.component.css'
})
export class FavoritesPagesComponent implements OnInit {

  tracks: TrackModel[] = []

  constructor(private trackSrv: TrackService) {}

  ngOnInit(): void {
    this.trackSrv.getAllTracks().subscribe({
      next: (tracks) => this.tracks = tracks,
      error: (err) => console.error('Error loading tracks', err)
    });
  }

}
