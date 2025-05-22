import { Component, OnInit } from '@angular/core';
import { PlayListBodyComponent } from '@app/shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from "../../components/search/search.component";
import { SearchServService } from '../../services/search-serv.service';
import { TrackModel } from '@app/core/models/track.model';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-page',
  imports: [CommonModule ,PlayListBodyComponent, SearchComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<TrackModel[]> = of([]);

  constructor(private searchSrv: SearchServService) {}

  ngOnInit(): void {}

  receiveData(event: string) {
    this.listResults$ = this.searchSrv.searchTracks$(event)    
  }

}
