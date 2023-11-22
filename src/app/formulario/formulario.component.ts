import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
  export class FormularioComponent{
    @Output() personaCreada = new EventEmitter<Persona>();
    nombre= " ";
    apellido= " ";
    numero_cel: number;
    correo = " ";

    agregarPersona(){
      let persona1 = new Persona(this.nombre, this.apellido, this.numero_cel,this.correo);
      //this.personas.push(persona1);
      this.personaCreada.emit(persona1);
    }


}
