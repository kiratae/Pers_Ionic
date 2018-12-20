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
      img: 'assets/icon/home.png',
      status: false
    },
    {
      title: 'จัดการรายวิชา',
      url: '/subm',
      img: 'assets/icon/sub.png',
      status: false
    },
    {
      title: 'จัดการระดับวัดผล',
      url: '/lvm',
      img: 'assets/icon/level.png',
      status: false
    },
    {
      title: 'จัดการคำถาม',
      url: '/qtm',
      img: 'assets/icon/question.png',
      status: false
    },
    {
      title: 'อยู่ระหว่างการพัฒนา...',
      url: '/qtm',
      img: 'assets/icon/exam_mono.png',
      status: true
    },
    {
      title: 'อยู่ระหว่างการพัฒนา...',
      url: '/chtm',
      img: 'assets/icon/answer_mono.png',
      status: true
    },
    {
      title: 'อยู่ระหว่างการพัฒนา...',
      url: '/list',
      img: 'assets/icon/dashboard_mono.png',
      status: true
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
