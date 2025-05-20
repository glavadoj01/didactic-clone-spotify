import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>,
  } = { defaultOptions: [], accessLink: [] }
  
  
  customOptions: Array<any> = []

  constructor() { }
  
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/','history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-chart',
        router: ['/','favorites']
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
  }
}
