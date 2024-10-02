import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
// import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'form-one',
    loadChildren: () => import('./features/form-one/form-one.module').then(m => m.FormOneModule),
    canActivate: [AuthGuard],
    data: { roles: ['group1'] }
  },
  {
    path: 'form-two',
    loadChildren: () => import('./features/form-two/form-two.module').then(m => m.FormTwoModule),
    canActivate: [AuthGuard],
    data: { roles: ['group2'] }
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
