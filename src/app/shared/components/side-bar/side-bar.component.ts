import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TrackService } from '@app/modules/tracks/services/track.service';

interface MenuOption {
  name: string;
  icon?: string;
  router?: any[];
}


@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: MenuOption[],
    accessLink: MenuOption[],
  } = { defaultOptions: [], accessLink: [] };
  
  
  customOptions: MenuOption[] = [];

  constructor(private router: Router, private trackService: TrackService) { }
  
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'tracks'] // localhost:4200/track
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'] // localhost:4200/history
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'] // localhost:4200/favorites
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que me gustan',
        icon: 'uil-heart-medical',
      }
    ]
    this.customOptions = [
      { name: 'Mi lista º1', router: ['/'] },
      { name: 'Mi lista º2', router: ['/'] },
      { name: 'Mi lista º3', router: ['/'] },
      { name: 'Mi lista º4', router: ['/'] }
    ];

    this.trackService.dataTracksRandom$
      .subscribe((data : any ) => {
        this.customOptions.push(
          {
            name: data[0].name,
            router: [],
            icon: 'uil uil-death'
          }
        )
      }
    )
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
