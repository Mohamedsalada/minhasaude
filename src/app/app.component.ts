import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers: [ScreenOrientation],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private screenOrientation: ScreenOrientation
  ) {
    this.platform.ready().then(() => {
      // Travar orientação
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    });
  }
}
