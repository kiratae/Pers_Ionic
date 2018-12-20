import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-insert-obj',
  templateUrl: './insert-obj.page.html',
  styleUrls: ['./insert-obj.page.scss'],
})
export class InsertObjPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.navigateBack('objm/:id');
  }
}
