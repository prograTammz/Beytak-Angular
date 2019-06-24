import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  openLoginModal(): void{
    console.log("Testing LoginModal");
  }
  goBack():void{
    this.location.back();
  }
}
