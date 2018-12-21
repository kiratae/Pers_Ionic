import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ObjectiveService } from '../../../../../services/objective.service'
//import { ObjectiveService } from '../../../../../services/level.service'
interface Objective {
  obj_id: number
  obj_name: string
  obj_status: number
  obj_scht_id: number
  obj_lv_id: number
}

@Component({
  selector: 'app-edit-objm',
  templateUrl: './edit-objm.page.html',
  styleUrls: ['./edit-objm.page.scss'],
})
export class EditObjmPage implements OnInit {

  private obj_id;
  private cht_id;  
  private scht_id;
  private objective: Objective;
  private data = {}

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private objectiveService: ObjectiveService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {this.objective = {'obj_id':0, 'obj_name':'', 'obj_status':0, 'obj_scht_id':0,'obj_lv_id':0 } }
  
  async ionViewDidEnter(){
    this.scht_id = this.route.snapshot.paramMap.get('id_scht')
    this.cht_id = this.route.snapshot.paramMap.get('id_cht')
    this.obj_id = this.route.snapshot.paramMap.get('id')
    console.log(this.scht_id)

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000,
      mode: 'ios'
    })    

    loading.present()
    
    this.objectiveService.get_by_edit(this.obj_id,this.cht_id,this.scht_id).subscribe((response) => {
      //this.meta = response['meta']
      //console.log(this.meta.table)
      this.objective = response['data'][0]
      console.log(this.objective)
      // this.myInput.setFocus()
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

  save(){
    let obj_name = this.data["obj_name"]
    let obj_lv_id = this.data["obj_lv_id"]

    if(this.objective.obj_id != 0){
      console.log(`update! ${this.objective.obj_id} ${obj_name} ${this.objective.obj_status} ${this.objective.obj_scht_id} ${obj_lv_id}`)

      this.objectiveService.update(this.objective.obj_id, obj_name, this.objective.obj_status, this.objective.obj_scht_id, obj_lv_id).subscribe((res: any) => {
        console.log(res)
        this.navCtrl.navigateBack('/objm/'+this.objective.obj_id+'/'+this.scht_id+'/'+this.cht_id);
      }, error => console.log(error))
      
    }else{
      this.errToast()
    }
  }

  back(){
    this.navCtrl.navigateBack('/objm/'+this.objective.obj_id+'/'+this.scht_id+'/'+this.cht_id);
  }

}
