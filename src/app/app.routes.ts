import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/private/home/home.routes').then((m) => m.routes),
  },
];
