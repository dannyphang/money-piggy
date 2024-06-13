import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./module/home/home/home.module').then(m => m.HomeModule),
        data: { breadcrumb: 'Home', title: 'Home' }
      },
      {
        path: 'login',
        loadChildren: () => import('./module/login/login/login.module').then(m => m.LoginModule),
        data: { breadcrumb: 'Login', title: 'Login', mode: 'SIGNIN' }
      },
      {
        path: 'signup',
        loadChildren: () => import('./module/login/login/login.module').then(m => m.LoginModule),
        data: { breadcrumb: 'Signup', title: 'Signup', mode: 'SIGNUP' }
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }