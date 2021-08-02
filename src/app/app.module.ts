import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AppHeaderComponent,
    FooterComponent,
  ],
  // imports: [BrowserModule,AppRoutingModule],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
