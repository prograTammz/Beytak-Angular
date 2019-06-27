import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';

import { NavigationEnd,Router,ActivatedRoute,RouterEvent } from '@angular/router';
import {filter,map}from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSidenav} from '@angular/material/sidenav'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) private sideNav: MatSidenav;
  private navigationEnd: Observable<RouterEvent>;
  private title: string;
  constructor(private sanitizer: DomSanitizer,private matIconRegistry: MatIconRegistry,private router: Router,private location: Location, private activatedRoute: ActivatedRoute) { 

    this.matIconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close.svg'));
    this.matIconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/search.svg'));
    this.matIconRegistry.addSvgIcon('fav', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/fav.svg'));
    
    this.navigationEnd = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(()=>{
        let child = this.activatedRoute.firstChild;
        return child.snapshot.data['routeName'];
      })
    )
  }

  ngOnInit() {
    this.navigationEnd.subscribe((data:any)=>{
      this.title = data;
      this.sideNav.close();
    })
  }

  openLoginModal(): void{
    console.log("Testing LoginModal");
  }
  goBack():void{
    this.location.back();
  }
  openDrawer(){
    this.sideNav.open();
  }
}
