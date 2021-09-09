import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';
import {TableComponent} from './table/table.component';
import {SharedModule} from "../shared/shared.module";
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { BiographyComponent } from './biography/biography.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    CompaniesComponent,
    PartnersComponent,
    BiographyComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ]
})
export class CollectionsModule { }
