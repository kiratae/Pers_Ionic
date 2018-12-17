import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';
import { LevelService } from '../services/level.service'

interface Level {
     lv_id: number
     lv_name_th: string
     lv_name_eng: string
     lv_status: number
   }



@Component({
  selector: 'app-lvm',
  templateUrl: './lvm.page.html',
  styleUrls: ['./lvm.page.scss'],
})
export class LvmPage implements OnInit {


  private levelLists: Level[];
  constructor(
    private navCtrl: NavController,
    private levelService: LevelService,
    private toastCtrl: ToastController
  ) { }
    
  ngOnInit() {
    this.levelService.get_all().subscribe((response) => {
      //  this.meta = response['meta']
      //  console.log(this.meta.table)
        this.levelLists = response['data']
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
    this.navCtrl.navigateBack('');
  }

}
