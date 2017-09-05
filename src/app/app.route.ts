import { RouterModule, Routes } from '@angular/router';
import { CarreiraComponent } from "./carreira/carreira.component";
import { ObjetivoComponent } from "./objetivo/objetivo.component";
import { ReuniaoComponent } from "./reuniao/reuniao.component";
import { EventoComponent } from "./evento/evento.component";

const APP_ROUTES: Routes = [
    { path: '', component: EventoComponent },
    { path: 'objetivos', component: ObjetivoComponent },
    { path: 'carreira', component: CarreiraComponent },
    { path: 'reunioes', component: ReuniaoComponent },
    { path: 'desempenho', component: EventoComponent },
    { path: 'feedbacks', component: EventoComponent },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);