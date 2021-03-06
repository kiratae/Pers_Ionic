import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { SubjectsService } from '../services/subjects.service'

interface Subjects {
  sub_id: number
  sub_code_th: string
  sub_code_en: string
  sub_name_th: string
  sub_name_en: string
  sub_objective: string
  sub_status: number
}

@Component({
  selector: 'app-subm',
  templateUrl: './subm.page.html',
  styleUrls: ['./subm.page.scss'],
})
export class SubmPage implements OnInit {

  private subjectsLists: Subjects[];

  constructor(
    private navCtrl: NavController,
    private subjectsService: SubjectsService,
    private toastCtrl: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  async ngOnInit() {

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000
    })

    loading.present()

    this.subjectsService.get_all().subscribe((response) => {
    //  this.meta = response['meta']
    //  console.log(this.meta.table)
      this.subjectsLists = response['data']
      loading.dismiss()
    },
    err => {
      loading.dismiss()
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

  doRefresh(event) {
    console.log('Begin async question');

    this.subjectsService.get_all().subscribe((response) => {
      //this.meta = response['meta']
      //console.log(this.meta.table)
      this.subjectsLists = response['data']
      event.target.complete()
    },
    err => {
        console.log(err.type)
        this.errToast()
        event.target.complete()
    })

    setTimeout(() => {
      console.log('Async question error time out')
      event.target.complete()
    }, 5000)

  }

  back(){
    this.navCtrl.navigateBack('');
  }

  add(){
    this.navCtrl.navigateForward('insert_subm');
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
            this.subjectsService.delete(id)
            this.subjectsLists.splice(index, 1)
          }
        }
      ]
    });

    await alert.present();
  }

  edit(id: any, slidingItem: ItemSliding) {
    console.log(`edit: ${id}`)
    slidingItem.close()
    this.navCtrl.navigateForward(`edit_subm/${id}`)
  }

  async ionViewDidEnter() {

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000
    })

    loading.present()

    this.subjectsService.get_all().subscribe((response) => {
      //this.meta = response['meta']
     // console.log(this.meta.table)
      this.subjectsLists = response['data']
      loading.dismiss()
    },
    err => {
      loading.dismiss()
      console.log(err.type)
      this.errToast()
    })
  }

  toChtm(id: any, slidingItem: ItemSliding){
    this.navCtrl.navigateForward(`chtm/${id}`)
  }
}
