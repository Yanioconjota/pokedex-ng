import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  standalone: false
})
export class PokemonsComponent implements OnInit {

  pokemons!: any[];
  constructor (private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.get('pokemon').subscribe((res: any) => {
      console.log(res);
      this.pokemons = [...res];
    });
  }
}
