import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { RouterModule } from '@angular/router'; //verifcar a necessidade de utilizacao futura

@NgModule({
  declarations: [
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class ControlPanelModule { }
