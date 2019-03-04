import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {TttBoxService} from '@services/ttt-box.service';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.scss']
})
export class StatusModalComponent {

  @ViewChild('statusModal') statusModal: ElementRef;
  winObj: string;
  modelWindow: NgbModalRef;
  constructor(private modalService: NgbModal, private tttBoxService: TttBoxService) { }

// open modal
  openModal(winObj) {
    this.winObj = winObj;
    this.modelWindow = this.modalService.open(this.statusModal, { backdrop : true, beforeDismiss: () => false });
  }

  resetBoard() {
    this.modelWindow.close();
    this.tttBoxService.resetBoard();
  }

}
