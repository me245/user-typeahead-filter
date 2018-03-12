import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  searchByControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
