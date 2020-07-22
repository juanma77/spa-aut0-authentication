import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Es público para poder utilizarlo en el html del componente
  constructor( public auth: AuthService ) { }

  ngOnInit() {
  }

}