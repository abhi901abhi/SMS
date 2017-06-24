import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
	imports: [RouterModule, CommonModule],
	declarations: [DashboardComponent],
	exports: [DashboardComponent]
})

export class DashboardModule { }
