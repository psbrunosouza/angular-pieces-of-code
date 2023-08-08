import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDialogModule, TuiModeModule,
  TuiRootModule, TuiThemeNightModule,
} from '@taiga-ui/core';
import { TuiTreeModule } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HighlightJsModule} from "ngx-highlight-js";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiTreeModule,
    HighlightJsModule,
    TuiThemeNightModule,
    TuiModeModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
