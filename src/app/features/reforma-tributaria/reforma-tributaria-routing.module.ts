import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReformaTributariaComponent } from './pages/reforma-tributaria.component';

const routes: Routes = [
  { path: '', component: ReformaTributariaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReformaTributariaRoutingModule { }
