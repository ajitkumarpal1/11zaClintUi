import { ForgotPasswordComponent } from './views/pages/forgot-password/forgot-password.component';
import { LoginComponent } from './views/pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './views/partials/home-layout/home-layout.component';
import { QueuechatsComponent } from './views/pages/master/components/queuechats/queuechats.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '', component: HomeLayoutComponent,
    children: [
      { path: 'master', loadChildren: () => import('./views/pages/master/master.module').then(m => m.MasterModule) },
      { path: 'file-upload', loadChildren: () => import('./views/pages/file-upload/file-uploads.module').then(m => m.FileUploadsModule) },
      { path: 'customers', loadChildren: () => import('./views/pages/customers/customers.module').then(c => c.CustomersModule) },
      { path: 'wallet', loadChildren: () => import('./views/pages/wallet/wallet.module').then(c => c.WalletModule) },
      { path: 'settings', loadChildren: () => import('./views/pages/settings/settings.module').then(c => c.SettingsModule) },
      {path: 'queuechats', component:QueuechatsComponent}
    ]
  },

  { path: '**', redirectTo: 'login' }
];
