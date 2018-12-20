import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from 'src/app/services/level.service';

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface Level {
  lv_id: number
  lv_name_th: string
  lv_name_eng: string
  lv_status: number
}


@Component({
  selector: 'app-edit-lv',
  templateUrl: './edit-lv.page.html',
  styleUrls: ['./edit-lv.page.scss'],
})
export class EditLvPage implements OnInit {

  @ViewChild('lv_name_th_input') myInput;

  private level: Level;
  private meta: Meta;
  private data = {}

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private levelService: LevelService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
    ) { this.level = { 'lv_id':0,'lv_name_th':'','lv_name_eng':'','lv_status':1 }}


    ionViewDidEnter(){
      let lv_id = this.route.snapshot.paramMap.get('id')
      console.log(lv_id)

      
  

      
      this.levelService.get_by_key(lv_id).subscribe((response) => {
        this.meta = response['meta']
        console.log(this.meta.table)
        this.level = response['data'][0]
        console.log(this.level)
        this.myInput.setFocus()
      },
      err => {
      //  loading.dismiss()
        console.log(err.type)
      //  this.errToast()
      })
    }
  ngOnInit() {
  }
  
  back(){
    this.navCtrl.navigateBack('lvm');
  }

  save(){
    let lv_name_th = this.data["lv_name_th"]
    let lv_name_eng = this.data["lv_name_eng"]

    if(this.level.lv_id != 0){
      console.log(`update! ${this.level.lv_id} ${lv_name_th} ${lv_name_eng} `)

      this.levelService.update(this.level.lv_id, lv_name_th,lv_name_eng , this.level.lv_status).subscribe((res: any) => {
        console.log(res)
      }, error => console.log(error))
      
      this.navCtrl.navigateBack('lvm');
    }else{
     // this.errToast()
    }
    
  }
}
