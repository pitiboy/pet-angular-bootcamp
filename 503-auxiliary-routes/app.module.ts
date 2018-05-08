import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NameComponent, HomeComponent, BlueBoxComponent, ChatComponent, TaskComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'hello/:name', component: NameComponent },
  { path: 'blue', component: BlueBoxComponent },

  { path: 'chat', component: ChatComponent, outlet: 'side' },
  { path: 'task', component: TaskComponent, outlet: 'side' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameComponent,
    BlueBoxComponent,
    ChatComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
