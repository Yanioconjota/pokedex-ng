import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  standalone: false
})
export class PokemonsComponent implements OnInit {
  constructor (private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.get('pokemon').subscribe(res => console.log(res));
  }
}
