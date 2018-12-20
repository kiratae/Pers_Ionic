import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertChoCorrectPage } from './insert-cho-correct.page';

const routes: Routes = [
  {
    path: '',
    component: InsertChoCorrectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertChoCorrectPage]
})
export class InsertChoCorrectPageModule {}
