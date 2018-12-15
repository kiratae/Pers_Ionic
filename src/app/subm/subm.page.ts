import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-subm',
  templateUrl: './subm.page.html',
  styleUrls: ['./subm.page.scss'],
})
export class SubmPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('');
  }
}
