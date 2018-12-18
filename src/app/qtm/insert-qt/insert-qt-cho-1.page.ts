import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { SubjectsService } from '../../services/subjects.service'

interface Subjects {
  sub_id: number
  sub_code_th: string
  sub_code_en: string
  sub_name_th: string
  sub_name_en: string
  sub_objective: string
}

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

@Component({
  selector: 'app-insert-qt-cho-1',
  templateUrl: './insert-qt-cho-1.page.html',
  styleUrls: ['./insert-qt-cho-1.page.scss'],
})
export class InsertQTCho1Page implements OnInit {

  private subjectLists: Subjects[];
  private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private subjectsService: SubjectsService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    this.subjectsService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.subjectLists = response['data']
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
    this.navCtrl.navigateBack('insert_qt');
  }

  save(){
    console.log('save!');
    this.navCtrl.navigateBack('qtm');
  }

}
