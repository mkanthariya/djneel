import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MeetTheDjComponent } from './meet-the-dj/meet-the-dj.component';
import { MusicComponent } from './music/music.component';
import { OurMissonComponent } from './our-misson/our-misson.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'our-mission',
    component:OurMissonComponent
  },
  {
    path:'music',
    component:MusicComponent
  },
  {
    path:'meet-the-dj',
    component:MeetTheDjComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

