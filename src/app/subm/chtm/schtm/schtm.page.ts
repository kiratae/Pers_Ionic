import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SubchapterService } from '../../../services/subchapter.service'

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface subchapter {
  scht_id: number
  scht_cht_id: number
  scht_sequence: string
  scht_name: string
  scht_status: number
}

@Component({
  selector: 'app-schtm',
  templateUrl: './schtm.page.html',
  styleUrls: ['./schtm.page.scss'],
})
export class SchtmPage implements OnInit {

   private subchapterLists: subchapter[];
   private subchapter:subchapter;
   private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private subchapterService: SubchapterService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {this.subchapter = { 'scht_id':0,'scht_cht_id':0,'scht_sequence':'','scht_name':'','scht_status':0}}
  ngOnInit() {
    let sub_id = this.route.snapshot.paramMap.get('id')
    console.log(sub_id)
    this.subchapterService.fecth(sub_id).subscribe((response) => {
        this.meta = response['meta']
        console.log(response['data'])
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
