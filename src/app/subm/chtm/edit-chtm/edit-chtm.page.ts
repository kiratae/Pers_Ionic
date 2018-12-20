import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../../services/chapter.service'

interface Chapter {
  cht_id: number
  cht_sequence: number
  cht_code: string
  cht_name: string
  cht_status: number
  cht_sub_id: number
}

@Component({
  selector: 'app-edit-chtm',
  templateUrl: './edit-chtm.page.html',
  styleUrls: ['./edit-chtm.page.scss'],
})
export class EditChtmPage implements OnInit {

  @ViewChild('sub_code_th_input') myInput;

  private sub_id;
  private chapter: Chapter;
  private data = {}

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private chapterService: ChapterService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {this.chapter = {'cht_id':0,'cht_sequence':0,'cht_code':'','cht_name':'','cht_status':0,'cht_sub_id':0 } }


  async ionViewDidEnter(){
    let cht_id = this.route.snapshot.paramMap.get('id_cht')
    this.sub_id = this.route.snapshot.paramMap.get('id')
    console.log(cht_id)

    const loading = await this.loadingController.create({
      message: 'กำลังโหลด',
      duration: 2000,
      mode: 'ios'
    })

    loading.present()
    
    this.chapterService.get_by_edit(this.sub_id,cht_id).subscribe((response) => {
      //this.meta = response['meta']
      //console.log(this.meta.table)
      this.chapter = response['data'][0]
      console.log(this.chapter)
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
    let cht_name = this.data["cht_name"]

    if(this.chapter.cht_id != 0){
      console.log(`update! ${this.chapter.cht_id} ${this.chapter.cht_sequence} ${this.chapter.cht_code} ${cht_name} ${this.chapter.cht_status} ${this.chapter.cht_sub_id}`)

      this.chapterService.update(this.chapter.cht_id, this.chapter.cht_sequence, this.chapter.cht_code, cht_name, this.chapter.cht_status, this.chapter.cht_sub_id).subscribe((res: any) => {
        console.log(res)
        this.navCtrl.navigateBack('/chtm/'+this.chapter.cht_sub_id);
      }, error => console.log(error))
      
    }else{
      this.errToast()
    }
  }

  back(sub_id){
    this.navCtrl.navigateBack('/chtm/'+sub_id);
  }
}
