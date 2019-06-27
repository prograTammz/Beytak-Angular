import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { NavigationEnd,Router,ActivatedRoute } from '@angular/router';
import {filter,map}from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSidenav} from '@angular/material/sidenav'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) sideNav: MatSidenav;


  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
  private title : string
  constructor(private sanitizer: DomSanitizer,private matIconRegistry: MatIconRegistry,private router: Router,private location: Location, private activatedRoute: ActivatedRoute) { 
    this.matIconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close.svg'));
    this.matIconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/search.svg'));
    this.matIconRegistry.addSvgIcon('fav', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/fav.svg'));
    
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(()=>{
        let child = this.activatedRoute.firstChild;
        return child.snapshot.data['routeName'];
      })
    ).subscribe((data:any)=>{
      this.title = data;
      this.sideNav.close();
    })
  }
  ngAfterViewInit(){
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
