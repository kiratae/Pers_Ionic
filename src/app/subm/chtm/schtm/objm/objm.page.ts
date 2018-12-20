import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ObjectiveService } from '../../../../services/objective.service'

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface Chapter {
  obj_id: number
  obj_name: string
  obj_status: number
  obj_scht_id: number
  obj_lv_id: number 
}

@Component({
  selector: 'app-objm',
  templateUrl: './objm.page.html',
  styleUrls: ['./objm.page.scss'],
})
export class ObjmPage implements OnInit {

  private chapterLists: Chapter[];
  private chapter:Chapter;
  private meta: Meta;

  constructor(
    private navCtrl: NavController,
    private objectiveService: ObjectiveService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) { this.chapter = { 'obj_id':0,'obj_name':'','obj_status':0,'obj_scht_id':0,'obj_lv_id':0}}

  ngOnInit() {
    let obj_scht_id = this.route.snapshot.paramMap.get('id')
    console.log(obj_scht_id)
    this.objectiveService.fecth(obj_scht_id).subscribe((response) => {
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
    this.navCtrl.navigateBack('schtm/:id');
  }

  add(){
    this.navCtrl.navigateForward('insert_obj');
  }
}
