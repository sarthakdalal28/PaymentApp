import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { routes } from './app/app-routing.module'; // if you're using routing
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provide HttpClient here
    //provideRouter(routes) // If you have routing
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
}).catch(err => console.error(err));