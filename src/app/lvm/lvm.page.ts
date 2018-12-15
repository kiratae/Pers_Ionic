import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-lvm',
  templateUrl: './lvm.page.html',
  styleUrls: ['./lvm.page.scss'],
})
export class LvmPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }
    
  ngOnInit() {
  }

}
