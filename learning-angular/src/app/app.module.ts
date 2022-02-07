import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DefaultTrainerNamePipe } from './default-trainer-name.pipe';
import { ContentTaggedPipe } from './content-tagged.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    DefaultTrainerNamePipe,
    ContentTaggedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
