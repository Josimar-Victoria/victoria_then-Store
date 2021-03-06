import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports:[
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
