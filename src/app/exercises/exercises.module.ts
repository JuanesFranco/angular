import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import {PanelModule} from 'primeng/panel';

import { PipeModule } from 'app/shared/pipes/pipe.module';
import { EditorComponent } from './editor/editor.component';
import { QuillModule } from 'ngx-quill';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    GalleryComponent,
    DataTablesComponent,
    EditorComponent,
    OrganigramaComponent,
    TableComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExercisesRoutingModule,
    PipeModule,
    NgxDatatableModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    OrganizationChartModule,
    NgbModule,
    ToastModule,
    PanelModule,
  ]
})
export class ExercisesModule { }
