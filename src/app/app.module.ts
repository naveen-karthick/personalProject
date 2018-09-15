import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderMenuComponent } from './slider-menu/slider-menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { DJComponentComponent } from './djcomponent/djcomponent.component';
import { CateringComponentComponent } from './catering-component/catering-component.component';
import { WedDecoratorComponentComponent } from './wed-decorator-component/wed-decorator-component.component';
import { CctvComponent } from './cctv/cctv.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { HomeComponent } from './home/home.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderMenuComponent,
    CarouselComponent,
    FooterComponent,
    DJComponentComponent,
    CateringComponentComponent,
    WedDecoratorComponentComponent,
    CctvComponent,
    ContactUsComponent,
    AboutUsComponent,
    OtherServicesComponent,
    HomeComponent,
    InteriorDesignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
