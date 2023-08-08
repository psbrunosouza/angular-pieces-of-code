import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'component-comunication',
    loadChildren: () =>
      import(
        './component-comunication/component-comunication-father/component-comunication-father.module'
      ).then((m) => m.ComponentComunicationFatherModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
