import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch/ng-switch.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida/ciclo-vida.component';
import { ClickCounterDirective } from './directives/click-counter/click-counter.directive';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    CicloVidaComponent,
    ClickCounterDirective,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
