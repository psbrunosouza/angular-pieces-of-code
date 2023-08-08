import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';

const routes: Routes = [
  {
    path: '',
    component: ChartComponent,
  },
];

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChartModule {}
