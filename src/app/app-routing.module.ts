import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'site', pathMatch: 'full'},
  {
    path: 'site',
    loadChildren: () => import('./features/site/site.module').then(m => m.SiteModule)
  },
  {
    path: 'reforma-tributaria',
    loadChildren: () => import('./features/reforma-tributaria/reforma-tributaria.module').then(m => m.ReformaTributariaModule)
  },
  { path: '**', redirectTo: 'site' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
