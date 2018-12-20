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
      img: 'assets/icon/home.png'
    },
    {
      title: 'จัดการรายวิชา',
      url: '/subm',
      img: 'assets/icon/sub.png'
    },
    {
      title: 'จัดการระดับวัดผล',
      url: '/lvm',
      img: 'assets/icon/level.png'
    },
    {
      title: 'จัดการคำถาม',
      url: '/qtm',
      img: 'assets/icon/question.png'
    },
    {
      title: 'จัดการชุดข้อสอบ',
      url: '/qtm',
      img: 'assets/icon/exam.png'
    },
    {
      title: 'จัดการเฉลยชุดข้อสอบ',
      url: '/chtm',
      img: 'assets/icon/answer.png'
    },
    {
      title: 'รายงานผล',
      url: '/list',
      img: 'assets/icon/dashboard.png'
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
