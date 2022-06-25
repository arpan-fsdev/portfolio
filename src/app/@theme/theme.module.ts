import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [SocialMediaComponent],
})
export class ThemeModule {}
