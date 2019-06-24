import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { NavigationEnd,Router,ActivatedRoute } from '@angular/router';
import {filter,map}from 'rxjs/operators'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private title : string
  constructor(private router: Router,private location: Location, private activatedRoute: ActivatedRoute) { 
    
    
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(()=>{
        let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['routeName']) {
              return child.snapshot.data['routeName'];
            } else {
              return null;
            }
          }
          return null;
      })
    ).subscribe((data:any)=>{
      this.title = data;
    })
  }
  openLoginModal(): void{
    console.log("Testing LoginModal");
  }
  goBack():void{
    this.location.back();
  }
}
