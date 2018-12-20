import { Component, OnInit, Input} from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { QuestionService } from '../services/question.service'
import { ChoModalPage } from './cho-modal/cho-modal.page';

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface Question {
  qt_id: number
  qt_text: string
  lv_name_th: string
  lv_name_eng: string
  obj_name: string
  qt_status: number
  correct: number
  incorrect: number
}

@Component({
  selector: 'app-qtm',
  templateUrl: './qtm.page.html',
  styleUrls: ['./qtm.page.scss'],
})
export class QTMPage implements OnInit {

  @Input('qt_text_input') qt_text_input: number;
  private searchTerm: string;
  private questionLists: Question[];
  private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private questionService: QuestionService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public modalController: ModalController
  ) { }

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000
    })

    loading.present()

    this.questionService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.questionLists = response['data']
      loading.dismiss()
    },
    err => {
        loading.dismiss()
        console.log(err.type)
        this.errToast()
    })
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000
    })

    loading.present()

    this.questionService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.questionLists = response['data']

      loading.dismiss()
    },
    err => {
        loading.dismiss()
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
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Okay')
            this.questionService.delete(id)
            this.questionLists.splice(index, 1)
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

  doRefresh(event) {
    console.log('Begin async question');

    this.questionService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.questionLists = response['data']
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

  ionChange(){
    console.log(this.searchTerm)
  }

  onCancel(){
    console.log('cancel')
  }

  back(){
    this.navCtrl.navigateBack('');
  }

  async view_cho(id: any, type: any) {
    console.log(`view_cho: ${id}`)
    const modal = await this.modalController.create({
      component: ChoModalPage,
      componentProps: {
        'id': id,
        'type': type
      }
    });
    return await modal.present();
  }

  add() {
    console.log(`add`)
    this.navCtrl.navigateForward('insert_qt')
  }

  edit(id: any, slidingItem: ItemSliding) {
    console.log(`edit: ${id}`)
    // this.questionService.update(id, 'test update', 1, 1)
    slidingItem.close()
    this.navCtrl.navigateForward(`update_qt/${id}`)
  }

  delete(index:any, id: any, slidingItem: ItemSliding) {
    console.log(`delete: ${id}`)
    slidingItem.close()
    this.deleteConfirm(index, id)
  }

}
