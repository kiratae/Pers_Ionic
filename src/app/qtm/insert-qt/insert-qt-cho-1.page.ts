import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insert-qt-cho-1',
  templateUrl: './insert-qt-cho-1.page.html',
  styleUrls: ['./insert-qt-cho-1.page.scss'],
})
export class InsertQTCho1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('insert_qt');
  }

}
