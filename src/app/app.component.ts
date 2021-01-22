import { Component } from '@angular/core';
import { Persona } from "./persona.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Array<Persona> = [new Persona("Juan", "Perez"), new Persona("Laura", "Gomez")]

}
