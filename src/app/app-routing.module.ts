import { SiteComponent } from './pages/site/site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReformaTributariaComponent } from './pages/reforma-tributaria/reforma-tributaria.component';

const routes: Routes = [
  { path: '', component: SiteComponent, pathMatch: 'full' },
  { path: 'reforma-tributaria', component: ReformaTributariaComponent },
  { path: '**', redirectTo: 'reforma-tributaria', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
