import { Component, OnInit } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  faCamera = faCamera

  constructor() { }

  ngOnInit(): void {
  }

}
