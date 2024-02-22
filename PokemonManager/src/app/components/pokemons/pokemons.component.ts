import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { FormBuscarPokemon } from '../../models/form-buscar-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {
  pokemons = [{ 'id': 0, 'nombre': '', 'img': '', 'categoria': '', 'tipo': ['', ''], 'talla': 0, 'peso': 0 }];
  cuenta = 0;
  formBuscarPokemon = new FormBuscarPokemon("");
  pokemonSeleccionado = '';
  constructor(private servicePokemons: PokemonsService) { }
  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.cuenta = this.servicePokemons.contarPokemons();
  }
  buscar(nombreDelPokemon: string) {
    this.pokemons = this.servicePokemons.buscarPokemon(nombreDelPokemon);
  }
  cancelarBuscar() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.formBuscarPokemon.setNombre('');
  }

}
