import { Pokemon, PokemonResponse } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  standalone: false
})
export class PokemonsComponent implements OnInit {

  pokemons!: Pokemon[];
  constructor (private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.get('pokemon').subscribe((res: PokemonResponse[]) => {
      this.pokemons = res.map(item => {
        const img = `${this.pokemonService.imgUrl}/${item.no}.png`;
        return new Pokemon(item.no, item.name, img);
      });
    });
  }
}
