import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewAnamnesePageComponent } from './pages/new-anamnese-page/new-anamnese-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { NewHospitalizationPageComponent } from './pages/new-hospitalization-page/new-hospitalization-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'anamnese', component: HomePageComponent },
    { path: 'anamnese/novo', component: NewAnamnesePageComponent, pathMatch: 'full', },
    { path: 'user/novo', component: NewUserPageComponent, pathMatch: 'full', },
    { path: 'internacao', component: NewHospitalizationPageComponent, pathMatch: 'full', },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
