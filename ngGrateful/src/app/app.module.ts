import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryService } from './services/entry.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent,
    EntryFormComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbModalModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [
    EntryService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    EntryFormComponent
  ]

})
export class AppModule { }
