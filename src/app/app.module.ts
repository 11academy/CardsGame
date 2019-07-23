import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxCardComponent } from './box-card/box-card.component';
import { SingleCardComponent } from './box-card/single-card/single-card.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const rotte: Routes = [
  {path: '', component:AppComponent},
  {path:'card', component:BoxCardComponent},
  {path:'single-card/:num', component:SingleCardComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BoxCardComponent,
    SingleCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte)

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
