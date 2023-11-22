import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona-ingresada',
  templateUrl: './persona-ingresada.component.html',
  styleUrls: ['./persona-ingresada.component.css']
})
export class PersonaIngresadaComponent {
  @Input() persona: Persona;
  @Input() indice: number;


}
