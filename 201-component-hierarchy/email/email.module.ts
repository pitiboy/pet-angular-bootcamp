import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmailContainerComponent } from './email-container/email-container.component';
import { FolderItemComponent } from './folder-item/folder-item.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { MessageBodyComponent } from './message-body/message-body.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { MessageHeaderComponent } from './message-header/message-header.component';

const routes: Routes = [
  { path: '', component: EmailContainerComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EmailContainerComponent,
    FolderItemComponent,
    FolderListComponent,
    MessageBodyComponent,
    MessageDisplayComponent,
    MessageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailModule { }
