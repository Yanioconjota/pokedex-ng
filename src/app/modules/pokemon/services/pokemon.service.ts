import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly httpService: HttpService) { }

  get(endpoint: string) {
    return this.httpService.get(endpoint);
  }
}
