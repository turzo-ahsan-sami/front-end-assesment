import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';

import { ProgrammingTree } from './Components/ProgrammingTree/ProgrammingTree';
import { TreeComponent } from './Components/ProgrammingTree/tree/tree.component';


// Services
import { MasterService } from './Services/master.service';

// Directives
import { TimeCounterDirective } from './Directives/timeCounter.directive';

// Pipes
import { FilterPipe } from './Pipes/Filter.pipe';
import { RemoveZeroPipe } from './Pipes/RemoveZero.pipe';
import { RoundNumberPipe } from './Pipes/RoundNumber.pipe';
import { SortPipe } from './Pipes/Sort.pipe';
import { ChangeStatusPipe } from './Pipes/ChangeStatus.pipe';
import { ShortNamePipe } from './Pipes/ShortName.pipe';
import { DoubleDigit } from './Pipes/DoubleDigit.pipe';
import { AmountInWords } from './Pipes/AmountInWords.pipe';
import { NumberToRoman } from './Pipes/NumberToRoman.pipe';



@NgModule({
  declarations:[
      AppComponent,

      // Components
      Home, Navbar, NotFound,

      ProgrammingTree, TreeComponent,

      // Pipes
      FilterPipe, RemoveZeroPipe, RoundNumberPipe, SortPipe, ChangeStatusPipe, ShortNamePipe, AmountInWords, DoubleDigit, NumberToRoman,


      // Directives
      TimeCounterDirective

  ],

  imports:[
    BrowserModule,
    HttpClientModule,     
    ReactiveFormsModule, 
    FormsModule,      
    AppRoutingModule, 
  ],

  providers:[
      // Services
      MasterService,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { 

}
