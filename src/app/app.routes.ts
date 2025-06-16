import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { RelativeStrengthCalculatorComponent } from './pages/relative-strength-calculator/relative-strength-calculator';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'nosotros', component: About },
    { path: 'productos', component: ProductsComponent },
    { path: 'contacto', component: Contact },
    { path: 'calculadora-fuerza', component: RelativeStrengthCalculatorComponent },
    { path: '**', redirectTo: '' }
];
