import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneracionesComponent } from './components/generaciones/generaciones.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    GeneracionesComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
