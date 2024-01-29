import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchPipe } from './search.pipe';
import { UpdateComponent } from './update/update.component';






@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    RegisterComponent,
    SearchPipe,
    UpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
