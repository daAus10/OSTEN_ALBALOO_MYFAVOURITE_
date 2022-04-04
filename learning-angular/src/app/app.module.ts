import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DefaultTrainerNamePipe } from './default-trainer-name.pipe';
import { ContentTaggedPipe } from './content-tagged.pipe';
import { HighlightDirective } from './highlight.directive';
import { AddContentComponent } from './add-content/add-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { ContentListComponent } from './content-list/content-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    DefaultTrainerNamePipe,
    ContentTaggedPipe,
    HighlightDirective,
    AddContentComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 500
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
