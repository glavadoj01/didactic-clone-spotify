import { Component } from '@angular/core';
import { SideBarComponent } from "@shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-home-page',
  imports: [SideBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
