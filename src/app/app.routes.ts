import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';
import { NgModule } from '@angular/core';
import { ResumoPontoComponent } from './resumo-ponto/resumo-ponto.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registro-ponto', component: RegistroPontoComponent },
    { path: 'resumo', component: ResumoPontoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];