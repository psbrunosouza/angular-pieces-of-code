import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComunicationFatherComponent } from './component-comunication-father.component';
import {HighlightJsDirective} from "ngx-highlight-js";
import {TuiButtonModule} from "@taiga-ui/core";

const routes: Routes = [
  {
    path: '',
    component: ComponentComunicationFatherComponent,
  },
];

@NgModule({
  declarations: [ComponentComunicationFatherComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HighlightJsDirective, TuiButtonModule],
})
export class ComponentComunicationFatherModule {}
