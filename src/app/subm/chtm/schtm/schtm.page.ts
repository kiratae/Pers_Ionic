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
   private sub_id;
   private scht_id;
   private scht_cht_id; 

  constructor(
    private navCtrl: NavController,
    private subchapterService: SubchapterService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private alertController: AlertController

  ) {this.subchapter = { 'scht_id':0,'scht_cht_id':0,'scht_sequence':'','scht_name':'','scht_status':0}}

  ngOnInit() {
    this.scht_id = this.route.snapshot.paramMap.get('id')
    console.log(this.scht_id)
    //this.scht_cht_id = this.route.snapshot.paramMap.get('scht_cht_id')
    this.sub_id = this.route.snapshot.paramMap.get('id_sub')
    console.log(this.sub_id)
    this.subchapterService.fecth(this.sub_id).subscribe((response) => {
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
    this.navCtrl.navigateBack('chtm/'+ this.sub_id);
  }

  delete(index:any, id: any, slidingItem: ItemSliding) {
    console.log(`delete: ${id}`)
    slidingItem.close();
    this.deleteConfirm(index, id)
  }
  async deleteConfirm(index, id) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบข้อมูล',
      message: 'แน่ใจ หรือไม่ที่ต้องการลบข้อมูลนี้',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Okay')
            this.subchapterService.delete(id)
            this.subchapterLists.splice(index, 1)
          }
        }
      ]
    });

    await alert.present();
  }

  add(){
    this.navCtrl.navigateForward('schtm_insert/'+this.scht_id +'/'+this.sub_id);
  }

  edit(id_scht: any,id: any, slidingItem: ItemSliding) {
    console.log(`edit: ${id}`)
    console.log(`edit: ${id_scht}`)
    slidingItem.close()
    this.navCtrl.navigateForward(`edit_schtm/${id_scht}/${id}/${this.sub_id}`)
  }

  async ionViewDidEnter() {

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000
    })

    loading.present()
    let cht_id = this.route.snapshot.paramMap.get('id')
    this.subchapterService.fecth(cht_id).subscribe((response) => {
      //this.meta = response['meta']
     // console.log(this.meta.table)
      this.subchapterLists = response['data']
      loading.dismiss()
    },
    err => {
      loading.dismiss()
      console.log(err.type)
      this.errToast()
    })
  }

  toSchtm(id: any, slidingItem: ItemSliding){
    this.navCtrl.navigateForward('objm/'+id+'/'+this.scht_id+'/'+this.sub_id)
    console.log(id)
    console.log(this.scht_id)
    console.log(this.sub_id)
  }

}
