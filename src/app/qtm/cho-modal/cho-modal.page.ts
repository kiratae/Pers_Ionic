import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ChoicesService } from 'src/app/services/choices.service';

@Component({
  selector: 'app-cho-modal',
  templateUrl: './cho-modal.page.html',
  styleUrls: ['./cho-modal.page.scss'],
})
export class ChoModalPage implements OnInit {

  @Input() id: number;
  @Input() type: number;

  private arr_cho: any;

  constructor(
    private choicesService: ChoicesService,
    public modalController: ModalController,
    private toastCtrl: ToastController
  ) { }

  ionViewDidEnter() {
    console.log(this.id)
    console.log(this.type)

    this.choicesService.get_by_qt_id(this.id, this.type).subscribe((response) => {
      this.arr_cho = response['data']
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

  close(){
    this.modalController.dismiss()
  }

}
