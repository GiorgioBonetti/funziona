import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import * as internal from 'events';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vedere : number = 0;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { 
    this.vedere = 0;
  }

  selezionato(indice: number)
  {
    this.vedere =  indice;
    console.log(this.vedere + "Vedere");
  }
  
  getSelezionato() : number
  {
    return this.vedere;
  }
}
