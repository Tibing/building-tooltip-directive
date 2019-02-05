import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { AwesomeTooltipDirective } from './tooltip/tooltip.directive';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeTooltipDirective,
    AwesomeTooltipComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AwesomeTooltipComponent],
})
export class AppModule {
}
