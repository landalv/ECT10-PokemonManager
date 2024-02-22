import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemon = {'id': 0, 'nombre': '', 'img': '', 'categoria': '', 'tipo': ['',''], 'talla': 0,'peso': 0}; 

  @Output() eventoClicImagen = new EventEmitter();
  clickEnImagen() {
  this.eventoClicImagen.emit(this.pokemon.nombre);
  }
}
