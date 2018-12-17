import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';
import { SubjectsService } from '../services/subjects.service'

interface Subjects {
     sub_id: number
     sub_code_th: string
     sub_code_en: string
     sub_name_th: string
     sub_name_en: string
     sub_objective: string
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
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.subjectsService.get_all().subscribe((response) => {
    //  this.meta = response['meta']
    //  console.log(this.meta.table)
      this.subjectsLists = response['data']
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

  add(){
    this.navCtrl.navigateForward('insert_subm');
  }
}
