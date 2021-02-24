import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeftNavComponent, FooterComponent, HeaderComponent],
  exports:[LeftNavComponent, FooterComponent, HeaderComponent]
})
export class MasterModule { }
