import { Component } from '@angular/core';

import { Team } from '../team.model';

// con este decorador le estoy indicando de que es un componente
@Component({
    selector: 'app-team',
    templateUrl: './team.component.html'
})
// export viene a ser como public en Java o .NET, permite que
// otros componentes de la aplicacion puedan utilizarlo
export class TeamComponent {
    team: Team = {
        id: 1,
        name: 'Olimpique de Lyon',
        country: 'France',
        level: 3,
        jersey: 'assets/images/OL_19_20.jpg'
    };
}