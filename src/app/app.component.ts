import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    titulo = 'CrudLab';
    personas: Persona[]=[];

    //constructor(){}

   // ngOnInit(): void{
       // this.personaAgregada();
     // }

  //ngOnInit(): void {
    //throw new Error('Method not implemented.');
  //}

   personaAgregada(persona:Persona){
      this.personas.push(persona)

  }
}
//function ngOnInit() {
  //throw new Error('Function not implemented.');
//}

