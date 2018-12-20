import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { LevelService } from '../services/level.service'

interface Level {
     lv_id: number
     lv_name_th: string
     lv_name_eng: string
     lv_status: number
   }
   interface Meta {
    table: string
    type: string
    total: number
    total_entries: number
  }


@Component({
  selector: 'app-lvm',
  templateUrl: './lvm.page.html',
  styleUrls: ['./lvm.page.scss'],
})
export class LvmPage implements OnInit {

  private searchTerm: string;
  private levelLists: Level[];
  private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private levelService: LevelService,
    private toastCtrl: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public modalController: ModalController
  ) { }
    
  ngOnInit() {
    this.levelService.get_all().subscribe((response) => {
        this.meta = response['meta']
        console.log(this.meta.table)
        this.levelLists = response['data']
      },
      err => {
          console.log(err.type)
          this.errToast()
      })
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
            this.levelService.delete(id)
            this.levelLists.splice(index, 1)
          }
        }
      ]
    });

    await alert.present();
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

  ionViewDidEnter() {
    this.levelService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.levelLists = response['data']
    },
    err => {
        console.log(err.type)
        this.errToast()
    })
  }

  doRefresh() {
    console.log('Begin async question');

    this.levelService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.levelLists = response['data']
    })

  }

  back(){
    this.navCtrl.navigateBack('');
  }

  add() {
    this.navCtrl.navigateForward('insert_lv')
  }
  edit(id: any, slidingItem: ItemSliding) {
    console.log(`edit: ${id}`)
    slidingItem.close()
    this.navCtrl.navigateForward(`edit_lv/${id}`)
  }
  delete(index:any, id: any, slidingItem: ItemSliding) {
    console.log(`delete: ${id}`)
    slidingItem.close();
    this.deleteConfirm(index, id)
  }
}
