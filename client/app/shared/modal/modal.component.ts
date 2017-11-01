import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() message = {
    body: '',
    type: '',
  };

  setMessage(body, type) {
    this.message.body = body;
    this.message.type = type;
  }
}
