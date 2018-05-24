import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InjCopmComponent } from './inj-copm/inj-copm.component';
import { TgCompComponent } from './tg-comp/tg-comp.component';
import { InjHostDirective } from './inj-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    InjCopmComponent,
    TgCompComponent,
    InjHostDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [InjCopmComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
