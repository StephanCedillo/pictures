// Suggested code may be subject to a license. Learn more: ~LicenseLog:1573716312.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:515539114.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3124541938.
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
      { projectId: "galeriastephan-ed825",
      appId: "1:262189256242:web:24a560914200bc65b2f62b", 
      storageBucket: "galeriastephan-ed825.firebasestorage.app", 
      apiKey: "AIzaSyAtp34H_8gnWmii6l93n-APr2n_BM3ryWE", 
      authDomain: "galeriastephan-ed825.firebaseapp.com", 
      messagingSenderId: "262189256242", 
      measurementId: "G-L3CTS0749N" })),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideDatabase(() => getDatabase()),
      provideStorage(() => getStorage()),
      provideFirebaseApp(() => initializeApp({ 
        projectId: "galeriastephan-ed825", 
        appId: "1:262189256242:web:24a560914200bc65b2f62b", 
        storageBucket: "galeriastephan-ed825.firebasestorage.app", 
        apiKey: "AIzaSyAtp34H_8gnWmii6l93n-APr2n_BM3ryWE", 
        authDomain: "galeriastephan-ed825.firebaseapp.com", 
        messagingSenderId: "262189256242", 
        measurementId: "G-L3CTS0749N" })),
         provideAuth(() => getAuth()),
          provideFirestore(() => getFirestore()),
           provideDatabase(() => getDatabase()), provideStorage(() => getStorage()),
      ]
};
