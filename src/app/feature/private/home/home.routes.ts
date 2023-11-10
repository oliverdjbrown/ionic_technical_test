import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/task',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'task',
        loadComponent: () =>
          import('./pages/task/task.page').then((m) => m.TaskPage),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.page').then((m) => m.UsersPage),
      },
      {
        path: 'post',
        loadComponent: () =>
          import('./pages/post/post.page').then((m) => m.PostPage),
      },
    ],
  },
];
