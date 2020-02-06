import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorizaded',
  templateUrl: './unauthorizaded.component.pug',
  styleUrls: ['./unauthorizaded.component.scss']
})
export class UnauthorizadedComponent implements OnInit {

  constructor() {  }

  ngOnInit() {

  }

  get Item() {
    return localStorage.getItem('err');
  }
}
