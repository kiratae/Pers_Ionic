import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าแรก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'จัดการรายวิชา',
      url: '/subm',
      icon: 'list'
    },
    {
      title: 'จัดการคำถาม',
      url: '/qtm',
      icon: 'list'
    },
    {
      title: 'จัดการระดับวัดผล',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'รายงานผล',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
