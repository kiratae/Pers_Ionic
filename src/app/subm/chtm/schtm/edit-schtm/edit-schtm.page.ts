import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SubchapterService } from '../../../../services/subchapter.service'

interface subchapter {
  scht_id: number
  scht_cht_id: number
  scht_sequence: string
  scht_name: string
  scht_status: number
}

@Component({
  selector: 'app-edit-schtm',
  templateUrl: './edit-schtm.page.html',
  styleUrls: ['./edit-schtm.page.scss'],
})
export class EditSchtmPage implements OnInit {

  @ViewChild('sub_code_th_input') myInput;

  private subchapter:subchapter;
  private data = {}
  private scht_id
  private cht_id

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private SubchapterService: SubchapterService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {this.subchapter = { 'scht_id':0,'scht_cht_id':0,'scht_sequence':'','scht_name':'','scht_status':0}}


  async ionViewDidEnter(){
    this.scht_id = this.route.snapshot.paramMap.get('id_scht')
    this.cht_id = this.route.snapshot.paramMap.get('id')
    console.log(this.scht_id)

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000,
      mode: 'ios'
    })

    loading.present()
    
    this.SubchapterService.get_by_edit(this.cht_id,this.scht_id).subscribe((response) => {
      //this.meta = response['meta']
      //console.log(this.meta.table)
      this.subchapter = response['data'][0]
      console.log(this.subchapter)
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
    let scht_name = this.data["scht_name"]

    if(this.subchapter.scht_id != 0){
      console.log(`update! ${this.subchapter.scht_id} ${this.subchapter.scht_sequence} ${scht_name} ${this.subchapter.scht_status} ${this.subchapter.scht_cht_id}`)

      this.SubchapterService.update(this.subchapter.scht_id, this.subchapter.scht_sequence, scht_name, this.subchapter.scht_status, this.subchapter.scht_cht_id).subscribe((res: any) => {
        console.log(res)
        this.navCtrl.navigateBack('/schtm/'+this.subchapter.scht_cht_id);
      }, error => console.log(error))
      
    }else{
      this.errToast()
    }
  }

  back(){
    this.navCtrl.navigateBack('/schtm/'+this.cht_id);
  }
}
