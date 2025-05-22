import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  
  @Output() callBackData: EventEmitter<any> = new EventEmitter()
  
  src: string = '';
  
  constructor() {}

  ngOnInit() {
    this.src = '';
  }

  callSearch(termino: string) {
    if (termino.length > 3) {
      this.callBackData.emit(this.src); 
    }
  }

}
