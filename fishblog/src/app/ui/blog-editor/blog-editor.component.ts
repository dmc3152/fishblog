import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

// add image resize module
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  modules: any = {
    imageResize: {},
    toolbar: [
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', {'color': []}],        // toggled buttons
      // ['blockquote', 'code-block'],
      [{ 'align': [] }],
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      // [{ 'color': [] }],          // dropdown with defaults from theme

      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
  
      // ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
