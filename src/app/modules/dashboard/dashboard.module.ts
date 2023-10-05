import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar'
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    //primeng imports
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    ToastModule
  ],
  providers:[MessageService, CookieService]
})
export class DashboardModule { }
