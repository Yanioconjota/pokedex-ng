export interface PokemonResponse {
  _id: string;
  name: string;
  no: number;
  __v: number
}

export interface IPokemon {
  no: number;
  name: string;
  img? : string;
}

export class Pokemon implements IPokemon {
  constructor(
    public no: number = 0,
    public name: string = '',
    public img: string = ''
  ) {}
}
