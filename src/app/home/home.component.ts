import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ServicesComponent } from '../services/services.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
