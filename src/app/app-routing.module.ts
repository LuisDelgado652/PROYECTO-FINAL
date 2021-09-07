import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PromediomovilComponent } from './pronostico/promediomovil/promediomovil.component';
import { SuavizamientoComponent } from './pronostico/suavizamiento/suavizamiento.component';
import { RegrelinealComponent } from './pronostico/regrelineal/regrelineal.component';
import { RegrecuadraticaComponent } from './pronostico/regrecuadratica/regrecuadratica.component';
import { MontecarloComponent } from './simulacion/montecarlo/montecarlo.component';
import { InventarioComponent } from './simulacion/inventario/inventario.component';
import { LineaEsperaComponent } from './simulacion/linea-espera/linea-espera.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'promedio_movil', component: PromediomovilComponent},
    { path: 'suavizamiento', component: SuavizamientoComponent},
    { path: 'regre_lineal', component: RegrelinealComponent},
    { path: 'regre_cuadratica', component: RegrecuadraticaComponent},
    { path: 'montecarlo', component: MontecarloComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: 'linea_espera', component: LineaEsperaComponent},
    { path: '', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}