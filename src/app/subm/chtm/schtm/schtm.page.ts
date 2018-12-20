import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { subchapterService } from '../services/subchapter.service'

interface Subjects {
  scht_id: number
  scht_cht_id: number
  scht_sequence: string
  scht_name: string
  scht_status: string
}

@Component({
  selector: 'app-schtm',
  templateUrl: './schtm.page.html',
  styleUrls: ['./schtm.page.scss'],
})
export class SchtmPage implements OnInit {

  private subchapterLists: subchapter[];

  constructor(
    private navCtrl: NavController,
    private subchapterService: subchapterService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }
  ngOnInit() {
    this.subchapterService.fecth(cht_id).subscribe((response) => {
      //  this.meta = response['meta']
      //  console.log(this.meta.table)
        this.subchapterLists = response['data']
      },
      err => {
          console.log(err.type)
          this.errToast()
      })
  }

  async errToast() {
    const toast = await this.toastCtrl.create({
      message: 'มีบางอย่างผิดพลาด! อภัยในความไม่สะดวก',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'ตกลง',
      color: "danger"
    });
    toast.present();
  }

  back(){
    this.navCtrl.navigateBack('chtm/:id');
  }

  add(){
    this.navCtrl.navigateForward('schtm_insert');
  }

}
