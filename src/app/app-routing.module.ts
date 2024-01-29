import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';




const routes: Routes = [
  {path: 'desktop' , component:DesktopComponent},
  {path: '', redirectTo: 'desktop', pathMatch: 'full'},
  {path: 'register' , component:RegisterComponent},
  {path: 'update/:id' , component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
