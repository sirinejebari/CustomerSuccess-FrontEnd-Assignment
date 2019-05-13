import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './container/search-container.component';

@NgModule({
  declarations: [SearchContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchContainerComponent
  ]
})
export class SearchModule { }
