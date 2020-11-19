import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {AgentComponent} from './agent/agent.component';
import {JoinUsComponent} from './join-us/join-us.component';
import {ContactComponent} from './contact/contact.component';
import {PaynowComponent} from './paynow/paynow.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: JoinUsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'agent', component: AgentComponent},
    {path: 'pay', component: PaynowComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
