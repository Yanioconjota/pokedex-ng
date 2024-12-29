import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { PokemonsComponent } from './component/pokemons/pokemons.component';

const components = [PokemonComponent, PokemonsComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class PokemonModule { }
