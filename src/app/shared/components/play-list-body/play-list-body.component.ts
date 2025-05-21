import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import data from "@app/data/tracks.json";
import { OrderListPipe } from '@app/shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  imports: [NgFor, NgTemplateOutlet, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {
  tracks: TrackModel[] = [];
  optionSort: {property: string | null, order:string} = {property: 'idd', order: 'asc'};

  constructor() {}

  ngOnInit(): void {
    this.tracks = data.data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: (order === 'asc') ? 'asc' : 'desc'
    }
  }

}
