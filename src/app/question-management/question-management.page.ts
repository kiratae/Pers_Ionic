import { Component, OnInit} from '@angular/core';
import { ItemSliding, NavController, ToastController } from '@ionic/angular';
import { QuestionService } from '../services/question.service'

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface Question {
    qt_id: number
    qt_text: string
    qt_status: number
    qt_type: number
  }

// interface Subjects {
//   sub_id: number
//   sub_code_th: string
//   sub_code_en: string
//   sub_name_th: string
//   sub_name_en: string
//   sub_objective: string
// }

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.page.html',
  styleUrls: ['./question-management.page.scss'],
})
export class QuestionManagementPage implements OnInit {

  private questionLists: Question[];
  private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private questionService: QuestionService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.questionService.get_all().subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.questionLists = response['data']
    },
    err => {
        console.log(err.type)
        this.presentToast()
    })
  }

  async presentToast() {
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

  view(id: any) {
    console.log(`view: ${id}`)
  }

  add() {
    console.log(`add`)
  }

  edit(id: any, slidingItem: ItemSliding) {
    console.log(`edit: ${id}`)
    slidingItem.close();
  }

  delete(id: any, slidingItem: ItemSliding) {
    console.log(`delete: ${id}`)
    slidingItem.close();
  }

}
