import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insert-qt',
  templateUrl: './insert-qt.page.html',
  styleUrls: ['./insert-qt.page.scss'],
})
export class InsertQTPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('qtm');
  }

  choicesType(){
    this.navCtrl.navigateForward('insert_qt_cho/1')
  }

  freeTextType(){
    this.navCtrl.navigateForward('insert_qt_cho/0')
  }

}
