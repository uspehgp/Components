import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElementsRoutingModule} from './elements-routing.module';
import {ElementsHomeComponent} from './elements-home/elements-home.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { TimesDirective } from './times.directive';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholdersComponent,
    TimesDirective
  ],
  exports: [],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule {
}
