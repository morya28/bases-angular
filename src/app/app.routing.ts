// Importar módulo del router de angluar
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { LibrosComponent } from './libros/libros.component';
import { HomeComponent } from './home/home.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'videojuegos/:nombre/:year', component: VideojuegosComponent },
    { path: 'externo', component: ExternoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: HomeComponent }
];

// Exportar el módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);