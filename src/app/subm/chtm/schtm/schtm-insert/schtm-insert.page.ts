import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-schtm-insert',
  templateUrl: './schtm-insert.page.html',
  styleUrls: ['./schtm-insert.page.scss'],
})
export class SchtmInsertPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  //  private subchapterService: subchapterService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('schtm/:id');
  }

}