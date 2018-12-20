import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';
//import { ChapterService } from '../../services/chapter.service'

//interface Chapter {
  //cht_id: number
  //cht_sequence: number
  //cht_code: string
  //cht_name: string
  //cht_status: number
  //cht_sub_id: number
//}

@Component({
  selector: 'app-chtm',
  templateUrl: './chtm.page.html',
  styleUrls: ['./chtm.page.scss'],
})
export class ChtmPage implements OnInit {

  //private chapterLists: Chapter[];

  constructor(
    private navCtrl: NavController,
    //private chapterService: ChapterService,
    private toastCtrl: ToastController
  ) { }

  //ngOnInit() {
    //this.chapterService.fecth(this.cht_sub_id).subscribe((response) => {
      //  this.meta = response['meta']
      //  console.log(this.meta.table)
      //  this.chapterService = response['data']
      //},
      //err => {
        //  console.log(err.type)
        //  this.errToast()
      //})
  //}

  //async errToast() {
    //const toast = await this.toastCtrl.create({
      //message: 'มีบางอย่างผิดพลาด! อภัยในความไม่สะดวก',
      //showCloseButton: true,
      //position: 'middle',
      //closeButtonText: 'ตกลง',
      //color: "danger"
    //});
    //toast.present();
  //}

  back(){
    this.navCtrl.navigateBack('subm');
  }

  add(){
    this.navCtrl.navigateForward('insert_chtm');
  }
}
