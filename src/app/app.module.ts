import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxCardComponent } from './box-card/box-card.component';
import { SingleCardComponent } from './box-card/single-card/single-card.component';
import { Routes, RouterModule } from '@angular/router';

import { CartaCopertaComponent } from './box-card/carta-coperta/carta-coperta.component';

const rotte: Routes = [
  {path: '', component:AppComponent},
  {path:'card', component:BoxCardComponent},
  {path:'single-card/:num', component:SingleCardComponent},
  {path:'carta-coperta/:num', component:CartaCopertaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BoxCardComponent,
    SingleCardComponent,
    CartaCopertaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte)

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
