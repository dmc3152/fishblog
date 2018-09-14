import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuillModule } from "ngx-quill";
import { CommonModule } from '@angular/common';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  exports: [
    BlogEditorComponent
  ],
  declarations: [BlogEditorComponent]
})
export class UiModule { }
