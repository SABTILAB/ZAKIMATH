import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Retirer 'provideClientHydration' qui n'est pas standard ici
import { FormsModule } from '@angular/forms';  // Ajouter l'import pour FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { RewardComponent } from './reward/reward.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })  // Ajouter FormsModule ici pour permettre l'utilisation de ngModel dans tes formulaires
  ],
  providers: [
    // Supprimer 'provideClientHydration()' ou ajouter des fournisseurs légitimes si nécessaire
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
