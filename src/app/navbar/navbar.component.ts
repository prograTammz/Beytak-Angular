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

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
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
  toggleDrawer(){
    
  }
}
