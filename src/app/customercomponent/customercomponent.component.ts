import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customercomponent',
  templateUrl: './customercomponent.component.html',
  styleUrls: ['./customercomponent.component.css']
})
export class CustomercomponentComponent {
  modalRef: BsModalRef;
  @ViewChild('template') input: TemplateRef<any>;
  constructor(private modalService: BsModalService) { }
 
  openModal() {
    this.modalRef = this.modalService.show(this.input, {class: 'modal-lg'});
  }

}