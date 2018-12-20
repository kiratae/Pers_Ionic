import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'qtm',
    loadChildren: './qtm/qtm.module#QTMPageModule'
  },
  {
    path: 'insert_qt',
    loadChildren: './qtm/insert-qt/insert-qt.module#InsertQTPageModule'
  },
  {
    path: 'insert_qt_cho/:id',
    loadChildren: './qtm/insert-qt/insert-qt-cho-1.module#InsertQTCho1PageModule'
  },
  { 
    path: 'subm', 
    loadChildren: './subm/subm.module#SubmPageModule' 
  },
  { 
    path: 'lvm', 
    loadChildren: './lvm/lvm.module#LvmPageModule' 
  },
  { 
  path: 'schtm/:id', 
  loadChildren: './subm/chtm/schtm/schtm.module#SchtmPageModule' 
  },
  
  { 
    path: 'insert_lv', 
    loadChildren: './lvm/insert-lv/insert-lv.module#InsertLvPageModule' 
  },
  { 
    path: 'insert_subm', 
    loadChildren: './subm/insert-subm/insert-subm.module#InsertSubmPageModule' 
  },
  { 
    path: 'update_qt/:id',
    loadChildren: './qtm/update-qt/update-qt.module#UpdateQtPageModule'
  },
  {
    path: 'edit_lv/:id', 
    loadChildren: './lvm/edit-lv/edit-lv.module#EditLvPageModule' 
  },
  { 
    path: 'chtm/:id', 
    loadChildren: './subm/chtm/chtm.module#ChtmPageModule' 

  },
  {
    path: 'insert-cho-correct/:id',
    loadChildren: './qtm/insert-qt/insert-cho-correct/insert-cho-correct.module#InsertChoCorrectPageModule'
  },
  {
    path: 'insert-cho-incorrect/:id',
    loadChildren: './qtm/insert-qt/insert-cho-incorrect/insert-cho-incorrect.module#InsertChoIncorrectPageModule'
  },

  { 
  path: 'schtm_insert', 
  loadChildren: './subm/chtm/schtm/schtm-insert/schtm-insert.module#SchtmInsertPageModule' 
  },
  { path: 'insert_chtm', 
  loadChildren: './subm/chtm/insert-chtm/insert-chtm.module#InsertChtmPageModule' 
  },

  { 
    path: 'objm/:id', 
    loadChildren: './subm/chtm/schtm/objm/objm.module#ObjmPageModule' 
  },
  { 
    path: 'insert_obj', 
    loadChildren: './subm/chtm/schtm/objm/insert-obj/insert-obj.module#InsertObjPageModule' 
  },
  {
    path: 'edit_objm', 
    loadChildren: './subm/chtm/schtm/objm/edit-objm/edit-objm.module#EditObjmPageModule' 
  },
  { 
    path: 'edit_chtm', 
    loadChildren: './subm/chtm/edit-chtm/edit-chtm.module#EditChtmPageModule' 
  },
  { 
    path: 'edit_schtm', 
    loadChildren: './subm/chtm/schtm/edit-schtm/edit-schtm.module#EditSchtmPageModule' 
  },
  { 
    path: 'edit_subm/:id', 
    loadChildren: './subm/edit-subm/edit-subm.module#EditSubmPageModule' 
  },
  {
    path: 'choModal',
    loadChildren: './qtm/cho-modal/cho-modal.module#ChoModalPageModule'
  }










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
