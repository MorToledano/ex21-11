import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PredictingComponent } from './predicting/predicting.component';
import { TipsComponent } from './tips/tips.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: 'predicting', component: PredictingComponent},
  { path: 'tips', component: TipsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }