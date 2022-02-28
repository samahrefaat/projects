
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen:boolean=false;
  isAdd:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.isOpen = !this.isOpen
  }
  dropdown(){
    this.isAdd = !this.isAdd

  }
  drop(){
    
    this.isAdd = !this.isAdd
  }

}
