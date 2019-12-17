import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicServiceComponent } from './basic-service/basic-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpErrorInterceptor } from './service/http-error.interceptor';
import { CustomErrorComponent } from './custom-error/custom-error.component';




@NgModule({
  declarations: [
    AppComponent,
    BasicServiceComponent,
    CustomErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
