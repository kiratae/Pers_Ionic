import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-objm',
  templateUrl: './objm.page.html',
  styleUrls: ['./objm.page.scss'],
})
export class ObjmPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.navigateBack('schtm/:id');
  }

  add(){
    this.navCtrl.navigateForward('insert_obj');
  }
}
