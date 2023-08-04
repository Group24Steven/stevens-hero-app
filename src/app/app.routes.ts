import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hero/:id', component: DescriptionComponent },
    { path: 'heroes', component: ListComponent }
];