import { Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { UserComponent } from './admin/user/user.component';
import { HostComponent } from './admin/host/host.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'host', component: HostComponent },
  ];
  
