import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { PokemonResponse } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  constructor(private readonly httpService: HttpService) { }

  get(endpoint: string) {
    return this.httpService.get<PokemonResponse[]>(endpoint);
  }
}
