import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { LoginComponent } from './Components/Auth/login/login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'myapp';
  firestore = inject(Firestore);
  auth = inject(Auth);

  ngOnInit() {
    if (this.firestore && this.auth) {
      console.log('✅ Firebase está funcionando correctamente');
    } else {
      console.error('❌ Error con Firebase');
    }
  }
}
