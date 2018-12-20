import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';

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

@Component({
  selector: 'app-update-qt',
  templateUrl: './update-qt.page.html',
  styleUrls: ['./update-qt.page.scss'],
})
export class UpdateQtPage implements OnInit {

  @ViewChild('qt_text_input') myInput;

  private question: Question;
  private meta: Meta;

  private data = {}

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private questionService: QuestionService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {
    this.question = { 'qt_id':0,'qt_text':'','qt_status':1,'qt_type':1 }
  }

  async ionViewDidEnter(){
    let qt_id = this.route.snapshot.paramMap.get('id')
    console.log(qt_id)

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000,
      mode: 'ios'
    })

    loading.present()

    this.questionService.get_by_key(qt_id).subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.question = response['data'][0]
      console.log(this.question)
      this.myInput.setFocus()
      loading.dismiss()
    },
    err => {
      loading.dismiss()
      console.log(err.type)
      this.errToast()
    })

  }

  ngOnInit() {
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
    this.navCtrl.navigateBack('qtm');
  }

  save(){
    let qt_text = this.data["qt_text"]

    if(this.question.qt_id != 0){
      console.log(`update! ${this.question.qt_id} ${qt_text}`)

      this.questionService.update(this.question.qt_id, qt_text, this.question.qt_status, this.question.qt_type).subscribe((res: any) => {
        console.log(res)
      }, error => console.log(error))
      
      this.navCtrl.navigateBack('qtm');
    }else{
      this.errToast()
    }
    
  }

}
