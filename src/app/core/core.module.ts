import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, AppRoutingModule],
})
export class CoreModule {}
