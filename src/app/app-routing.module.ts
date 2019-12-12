import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components

import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';

import { ProgrammingTree } from './Components/ProgrammingTree/ProgrammingTree';


const APP_ROUTES: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', pathMatch: 'full', component: Home },

  { path: 'tree', pathMatch: 'full', component: ProgrammingTree },
 
  
  { path: '**', component: NotFound },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
