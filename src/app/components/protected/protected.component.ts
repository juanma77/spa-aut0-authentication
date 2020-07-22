import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor( public auth: AuthService ) {

    
  }

  ngOnInit() {

    console.log( 'ngOnInit protected page' ); 

    this.auth.userProfile$.subscribe( perfil => {

      console.log( perfil );

    });

  }

}
