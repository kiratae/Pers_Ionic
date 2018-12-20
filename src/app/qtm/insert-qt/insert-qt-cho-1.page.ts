import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { SubjectsService } from '../../services/subjects.service'
import { ChapterService } from '../../services/chapter.service'
import { SubchapterService } from '../../services/subchapter.service'
import { ObjectiveService } from '../../services/objective.service'
import { QuestionService } from '../../services/question.service'
import { QuestionMatchingService } from '../../services/question-matching.service'

interface Subjects {
  sub_id: number
  sub_code_th: string
  sub_code_en: string
  sub_name_th: string
  sub_name_en: string
  sub_objective: string
}

interface Chapter {
  cht_id: number
  cht_sequnce: number
  cht_code: string
  cht_name: string
  cht_status: number
  cht_sub_id: number
}

interface Subchapter {
  scht_id: number
  scht_sequnce: number
  scht_name: string
  scht_status: number
  scht_cht_id: number
}

interface Objective {
  obj_id: number
  obj_name: string
  obj_status: number
  obj_scht_id: number
  obj_lv_id: number
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

  private subjectLists: Subjects[]
  private chataptertLists: Chapter[]
  private subchataptertLists: Subchapter[]
  private objectiveLists: Objective[]
  private meta: Meta

  private isChtDisabled: boolean = true
  private isSchtDisabled: boolean = true
  private isObjDisabled: boolean = true
  private isQtDisabled: boolean = true
  private isSaveBtnDisabled: boolean = true

  private data = {}

  constructor(
    private navCtrl: NavController,
    private subjectsService: SubjectsService,
    private chapterService: ChapterService,
    private subchapterService: SubchapterService,
    private objectiveService: ObjectiveService,
    private questionService: QuestionService,
    private questionMatchingService: QuestionMatchingService,
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

  fetch_cht(){
    let sub_id = this.data["sub_id"]
    console.log(sub_id);
    this.chapterService.fecth(sub_id).subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.chataptertLists = response['data']
      this.isChtDisabled = false
    })
  }

  fetch_scht(){
    let cht_id = this.data["cht_id"]
    console.log(cht_id);
    this.subchapterService.fecth(cht_id).subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.subchataptertLists = response['data']
      this.isSchtDisabled = false
    })
  }

  fetch_obj(){
    let scht_id = this.data["scht_id"]
    console.log(scht_id);
    this.objectiveService.fecth(scht_id).subscribe((response) => {
      this.meta = response['meta']
      console.log(this.meta.table)
      this.objectiveLists = response['data']
      this.isObjDisabled = false
    })
  }

  enabled_qt(){
    let obj_id = this.data["obj_id"]
    console.log(obj_id);
    if(obj_id != null)
      this.isQtDisabled = false
    else
      this.isQtDisabled = true
    
  }

  enabled_save_btn(){
    let qt_text: string = this.data["qt_text"]
    if(qt_text != '')
      this.isSaveBtnDisabled = false
    else
      this.isSaveBtnDisabled = true
  }

  save(){
    let qt_text = this.data["qt_text"]
    let sub_id = this.data["sub_id"]
    let cht_id = this.data["cht_id"]
    let scht_id = this.data["scht_id"]
    let obj_id = this.data["obj_id"]
    let qt_id = 0

    console.log(`save! ${sub_id} ${cht_id} ${scht_id} ${obj_id} ${qt_text}`)

    this.questionService.insert(qt_text, 1, 1).subscribe((res: any) => {
      console.log(res['qt_id'])
      qt_id = res['qt_id']

      this.questionMatchingService.insert(scht_id, obj_id, qt_id).subscribe((res: any) => {
        console.log(res['qm_id'])
      }, error => console.log(error))
  
    }, error => console.log(error))
    
    this.navCtrl.navigateBack('qtm');
  }

}
