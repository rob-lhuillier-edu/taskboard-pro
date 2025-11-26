import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './features/about/about';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./features/about/routes').then(m => m.ABOUT_ROUTES)
    },
    {
        path: 'tasks',
        loadChildren: () => 
            import('./features/tasks/routes').then(m => m.TASKS_ROUTES)
    }
];
