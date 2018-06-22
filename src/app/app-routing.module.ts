import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { AdvFormComponent } from './adv-form/adv-form.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path: "basic", component: BasicFormComponent},
  {path: "adv", component: AdvFormComponent},
  {path: "report/:id", component: ReportComponent},
  {path: "", redirectTo: "/basic", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
