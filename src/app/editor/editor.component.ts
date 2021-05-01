import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public Editor = DecoupledEditor;
  inputValue: any = "<p>Hello, world!</p>";
  public onReady(editor: any) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
  ckConfig = {
    items: [
      'heading', '|',
      'fontfamily', 'fontsize', '|',
      'alignment', '|',
      'fontColor', 'fontBackgroundColor', '|',
      'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
      'link', '|',
      'outdent', 'indent', '|',
      'bulletedList', 'numberedList', 'todoList', '|',
      'code', 'codeBlock', '|',
      'insertTable', '|',
      'uploadImage', 'blockQuote', '|',
      'undo', 'redo'
  ],

  };
  constructor() { }

  ngOnInit(): void {
  }

  onBlur() {
    localStorage.setItem('Data',this.inputValue);

  }

  onFocus() {

  }

  keyUp(event:any) {
    this.inputValue = event.target.value;
  }

  onChange() {
  }

}
