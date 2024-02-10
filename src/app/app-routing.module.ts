import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ProtfolioComponent } from './components/protfolio/protfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent, title: 'Home'},
  {path:'about',component:AboutComponent, title: 'About'},
  {path:'contact',component:ContactComponent, title: 'Contact'},
  {path:'portfolio',component:ProtfolioComponent, title: 'Portfolio'},
  {path:'**',component:NotFoundComponent,title:'Not found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
