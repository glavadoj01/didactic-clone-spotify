import { Component, OnInit } from '@angular/core';
import { SectionGenericComponent } from "@shared/components/section-generic/section-generic.component";
import { TrackModel } from '@app/core/models/track.model';
import data from "@app/data/tracks.json";

@Component({
  selector: 'app-tracks-page',
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTracksList:Array<TrackModel> = []  

  constructor() {}

  ngOnInit(): void {
    this.mockTracksList = data.data
  }

}
