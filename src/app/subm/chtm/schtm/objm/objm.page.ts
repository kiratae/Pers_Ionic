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

interface Objective {
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

  private objectiveLists: Objective[];
  private objective: Objective;
  private meta: Meta;
  private scht_id;
  private cht_id;
  private sub_id;

  constructor(
    private navCtrl: NavController,
    private objectiveService: ObjectiveService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { this.objective = { 'obj_id':0,'obj_name':'','obj_status':0,'obj_scht_id':0,'obj_lv_id':0}}

  ngOnInit() {
    this.scht_id = this.route.snapshot.paramMap.get('id')
    this.cht_id = this.route.snapshot.paramMap.get('id_cht')
    this.sub_id = this.route.snapshot.paramMap.get('id_sub')
    console.log(this.scht_id)
    this.objectiveService.fecth(this.scht_id).subscribe((response) => {
        this.meta = response['meta']
        console.log(response['data'])
        this.objectiveLists = response['data']
      },
    err => {
          console.log(err.type)
          this.errToast()
      })
  }

  ionViewDidEnter() {
    this.scht_id = this.route.snapshot.paramMap.get('id')
    this.cht_id = this.route.snapshot.paramMap.get('id_cht')
    this.sub_id = this.route.snapshot.paramMap.get('id_sub')
    console.log(this.scht_id)
    this.objectiveService.fecth(this.scht_id).subscribe((response) => {
        this.meta = response['meta']
        console.log(response['data'])
        this.objectiveLists = response['data']
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
    this.navCtrl.navigateBack('schtm/'+this.cht_id+'/'+this.sub_id);
  }

  add(){
    this.navCtrl.navigateForward(`insert_obj/${this.scht_id}/${this.cht_id}/${this.sub_id}`);
  }

  edit(id: any, slidingItem: ItemSliding) {
    console.log(`edit: ${id}`)
    slidingItem.close()
    this.navCtrl.navigateForward(`edit_objm/${id}/${this.scht_id}/${this.cht_id}/${this.sub_id}`)
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
            this.objectiveService.delete(id)
            this.objectiveLists.splice(index, 1)
          }
        }
      ]
    });

    await alert.present();
  }
}
