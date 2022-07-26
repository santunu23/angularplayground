import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { OfflineappComponent } from './components/offlineapp/offlineapp.component';

const routes: Routes = [  
{ path: '', redirectTo: 'offlineapp', pathMatch: 'full' },
{path:'offlineapp',component:OfflineappComponent },
{path:'dynamicform',component:DynamicformComponent},
{path:'reactiveform',component:ReactiveformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
