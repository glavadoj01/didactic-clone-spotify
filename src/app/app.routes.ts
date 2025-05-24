import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home/home-page.component';
import { sessionGuard } from '@core/guards/session.guard';


export const routes: Routes = [
    {
        path: 'auth', // localhost:4200/auth
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes),
    },
    {
        path: '', // localhost:4200
        component: HomePageComponent,
        loadChildren: () => import('./modules/home/home.routes').then(m => m.homeRoutes),
        canActivate: [sessionGuard]
    }
]
