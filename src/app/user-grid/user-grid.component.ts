import { Component, OnInit, Input } from '@angular/core';
import { User } from '../data-models/user';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

}
