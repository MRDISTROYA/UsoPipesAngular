import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CuadradoPipe } from './pipes/cuadrado.pipe';
import { AlternadasPipe } from './pipes/alternadas.pipe';
import { FechaPipe } from './pipes/fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoPipe,
    AlternadasPipe,
    FechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
