import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
