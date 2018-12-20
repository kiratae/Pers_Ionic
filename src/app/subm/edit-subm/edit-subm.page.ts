import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service'


interface subject {
  sub_id: number
  sub_code_th: string
  sub_code_en: string
  sub_name_th: string
  sub_name_en: string
  sub_objective: string
  sub_status: number
}

@Component({
  selector: 'app-edit-subm',
  templateUrl: './edit-subm.page.html',
  styleUrls: ['./edit-subm.page.scss'],
})
export class EditSubmPage implements OnInit {

  @ViewChild('sub_code_th_input') myInput;

  private subject: subject;
  //private meta: Meta;
  private data = {}

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private SubjectsService: SubjectsService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
    ) { this.subject = { 'sub_id':0,'sub_code_th':'','sub_code_en':'','sub_name_th':'','sub_name_en':'','sub_objective':'','sub_status':1 } }

    async   ionViewDidEnter(){
      let sub_id = this.route.snapshot.paramMap.get('id')
      console.log(sub_id)

      


      
      this.SubjectsService.get_by_key(sub_id).subscribe((response) => {
        //this.meta = response['meta']
        //console.log(this.meta.table)
        this.subject = response['data'][0]
        //console.log(this.subject)
        this.myInput.setFocus()
      },
      err => {
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
    let sub_code_th = this.data["sub_code_th"]
    let sub_code_en = this.data["sub_code_en"]
    let sub_name_th = this.data["sub_name_th"]
    let sub_name_en = this.data["sub_name_en"]
    let sub_objective = this.data["sub_objective"]

    if(this.subject.sub_id != 0){
      console.log(`update! ${this.subject.sub_id} ${sub_code_th} ${sub_code_en} ${sub_name_th} ${sub_name_en} ${sub_objective}`)

      this.SubjectsService.update(this.subject.sub_id, sub_code_th, sub_code_en, sub_name_th, sub_name_en, sub_objective,this.subject.sub_status).subscribe((res: any) => {
        console.log(res)
        this.navCtrl.navigateBack('/subm');
      }, error => console.log(error))
      
    }else{
      this.errToast()
    }
    
  }

  back(){
    this.navCtrl.navigateBack('/subm');
  }
}
