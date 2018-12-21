import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ObjectiveService } from 'src/app/services/objective.service';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-insert-obj',
  templateUrl: './insert-obj.page.html',
  styleUrls: ['./insert-obj.page.scss'],
})
export class InsertObjPage implements OnInit {

  private scht_id
  private cht_id
  private sub_id
  private arr_level
  private data = {}

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private objectiveService: ObjectiveService,
    private levelService: LevelService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.scht_id = this.route.snapshot.paramMap.get('id_scht')
    this.cht_id = this.route.snapshot.paramMap.get('id_cht')
    this.sub_id = this.route.snapshot.paramMap.get('id_sub')

    this.levelService.get_all().subscribe((response) => {
      this.arr_level = response['data']
      console.log(this.arr_level);
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

  save(){
    let obj_name = this.data['obj_name']
    let obj_lv_id = this.data['obj_lv_id']
    console.log(obj_name);
    console.log(obj_lv_id);
    this.objectiveService.insert(obj_name, 1, this.scht_id,  obj_lv_id).subscribe((res: any) => {
      this.navCtrl.navigateBack(`objm/${this.scht_id}/${this.cht_id}/${this.sub_id}`);
    })
  }

  back(){
    this.navCtrl.navigateBack(`objm/${this.scht_id}/${this.cht_id}/${this.sub_id}`);
  }

}
