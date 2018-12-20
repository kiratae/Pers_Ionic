import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insert-chtm',
  templateUrl: './insert-chtm.page.html',
  styleUrls: ['./insert-chtm.page.scss'],
})
export class InsertChtmPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('chtm/:id');
  }
}
