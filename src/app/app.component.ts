import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upc-store';
  equipos = ['Olimpique Lyon', 'Bayern Munchen', 'Paris Saint Germain', 'RB Leipzig'];

  agregar() {
    this.equipos.push('Nuevo equipo');
  }

  eliminar(index: number) {
    this.equipos.splice(index, 1);
  }
}
