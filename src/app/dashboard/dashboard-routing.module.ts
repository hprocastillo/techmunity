import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {SessionGuard} from '../auth/guards/session.guard';

const routes: Routes = [{path: '', component: DashboardComponent, canActivate: [SessionGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
