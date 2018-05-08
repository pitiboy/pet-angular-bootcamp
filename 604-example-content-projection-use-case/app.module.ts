import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NewsComponent } from './news';
import { CollectionPanelComponent, CollectionPanelComponentTagsDirective } from './collection-panel';
import { AnnouncementComponent, AnnouncementComponentTagsDirective } from './announcement';

@NgModule({
  declarations: [
    NewsComponent,
    CollectionPanelComponent,
    CollectionPanelComponentTagsDirective,
    AnnouncementComponent,
    AnnouncementComponentTagsDirective
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [NewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
