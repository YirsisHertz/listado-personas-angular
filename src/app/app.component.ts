import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Listado de Personas';
  nombreInput: string = '';
  apellidoInput: string = '';
  personas: Array<Persona> = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Gomez'),
  ];

  agregarPersona(): void{
    if(this.nombreInput.trim() === '' || this.apellidoInput.trim() === ''){
    	return 
    }
    this.personas.push(new Persona(this.nombreInput, this.apellidoInput))
    this.nombreInput = ''
    this.apellidoInput = ''
  }

}
