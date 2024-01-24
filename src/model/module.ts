import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app/module';
import { ModelsWidgetComponent } from './widgetes/model-widget/ui/component';
import { ModuleRoutingModule } from './router';

@NgModule({
  declarations: [
    ModelsWidgetComponent,
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    AppModule,
  ],
})
export class ModelModule { }
