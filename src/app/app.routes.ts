import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'control-finance/login',
    pathMatch: 'full',
  },
  {
    path: 'control-finance/login',
    component: LoginComponent,
  },
  {
    path: 'control-finance/home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
