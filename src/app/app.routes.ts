import { Routes } from '@angular/router';
import { CalculadoraImc} from './calculadora-imc/calculadora-imc';

export const routes: Routes = [
    { path: 'calculadora', redirectTo: 'calculadora-imc', pathMatch: 'full' },
];
