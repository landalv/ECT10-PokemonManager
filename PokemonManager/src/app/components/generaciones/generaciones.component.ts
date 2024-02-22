import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generaciones',
  templateUrl: './generaciones.component.html',
  styleUrl: './generaciones.component.css'
})
export class GeneracionesComponent implements OnInit {
  generaciones = ["I", "II", "III", "IV", "V", "VI", "VII"];
  ngOnInit(): void {
  }
}
