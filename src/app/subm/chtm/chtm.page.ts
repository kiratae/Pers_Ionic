import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../services/chapter.service'

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface Chapter {
  cht_id: number
  cht_sequence: number
  cht_code: string
  cht_name: string
  cht_status: number
  cht_sub_id: number
}

@Component({
  selector: 'app-chtm',
  templateUrl: './chtm.page.html',
  styleUrls: ['./chtm.page.scss'],
})
export class ChtmPage implements OnInit {

  private chapterLists: Chapter[];
  private chapter:Chapter;
  private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private chapterService: ChapterService,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    public modalController: ModalController
    
  ) {this.chapter = { 'cht_id':0,'cht_sequence':0,'cht_code':'','cht_name':'','cht_status':0,'cht_sub_id':0 }}


  ngOnInit() {
    let sub_id = this.route.snapshot.paramMap.get('id')
    console.log(sub_id)
    this.chapterService.fecth(sub_id).subscribe((response) => {
        this.meta = response['meta']
        console.log(response['data'])
        this.chapterLists = response['data']
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
    this.navCtrl.navigateBack('subm');
  }

  add(){
    this.navCtrl.navigateForward('insert_chtm');
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
            this.chapterService.delete(id)
            this.chapterLists.splice(index, 1)
          }
        }
      ]
    });

    await alert.present();
  }
  
}
