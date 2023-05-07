import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MarkupComponent } from './components/markup/markup.component';
import { AngularComponent } from './components/angular/angular.component';
import { NodeComponent } from './components/node/node.component';


const routes: Routes = [
  {
    path: '',
    component: MarkupComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },

  {
    path: 'node',
    component: NodeComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MarkupComponent,
    AngularComponent,
    NodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
