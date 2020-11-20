import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgentComponent } from './agent/agent.component';
import { ContactComponent } from './contact/contact.component';
import { PaynowComponent } from './paynow/paynow.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AgentComponent,
    ContactComponent,
    PaynowComponent,
    JoinUsComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUnuPXweOavCoI5FlyO5z4UXf_6y74Zfg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
