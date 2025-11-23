import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers: [ScreenOrientation],
})
export class AppComponent {
  constructor(private screenOrientation: ScreenOrientation) {
    
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
}

