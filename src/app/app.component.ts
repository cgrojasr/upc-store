import { Component } from '@angular/core';

import { Team } from './team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upc-store';
  equipos = ['Olimpique de Lyon', 'Bayern Munchen', 'Paris Saint Germain', 'RB Leipzig'];

  teams: Team[] = [
    {
      id: 1,
      name: 'Olimpique de Lyon',
      country: 'France',
      level: 3,
      jersey: 'assets/images/OL_19_20.jpg'
    },
    {
      id: 2,
      name: 'Bayern Munchen',
      country: 'Germany',
      level: 5,
      jersey: 'assets/images/BM_19_20.jpg'
    },
    {
      id: 3,
      name: 'Paris Saint Germain',
      country: 'France',
      level: 5,
      jersey: 'assets/images/PSG_19_20.jpg'
    },
    {
      id: 4,
      name: 'RB Leipzig',
      country: 'Germany',
      level: 4,
      jersey: 'assets/images/RBL_19_20.jpg'
    }
  ];

  agregar() {
    this.equipos.push('Nuevo equipo');
  }

  eliminar(index: number) {
    this.equipos.splice(index, 1);
  }
}
