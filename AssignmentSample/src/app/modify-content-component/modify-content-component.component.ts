import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';
import { MessageService } from '../services/message.service';

export interface DialogData {
  content: Content;
  tags: string;
  id: string;
}


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Input() newContent: Content = { title: '', description: '', creator: '' };
  temptags: string = "";
  tempid: string = "";
  @Input() buttonText: string = "Add New Content";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private digimonService: DigimonService, private messageService: MessageService, public dialog: MatDialog) {
    // this.newContent = { title: '', description: '', creator: '' };
  }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyContentDialogComponent, {
      width: '400px',
      data: this.newContent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed');
      if (result) {
        this.newContent = result.content;
        this.tempid = result.id;
        this.temptags = result.tags;
        this.modifyOrAddItemToParent();
      }
    });
  }

  modifyOrAddItemToParent(): void {
    // if (!this.tempid || !this.newContent.title || !this.newContent.description || !this.newContent.creator) {
    //   fail("Please enter the required fields to continue");
    // }
    if (this.tempid !== "") {
      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      this.newContent.id = parseInt(this.tempid);
      // this.newContent.id = parseInt(this.tempid);
      this.digimonService.updateContent(this.newContent).subscribe(() => {
        this.updateContentEvent.emit();
        this.messageService.add("Content successfully updated, id: " + this.newContent.id + ", title: " + this.newContent.title);
        this.newContent = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
        this.tempid = "";
      });
    }
    else {
      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      // this.newContent.id = parseInt(this.tempid);
      this.digimonService.addContent(this.newContent).subscribe(newContentFromServer => {
        this.newContentEvent.emit(newContentFromServer);
        this.newContent = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
      });
    }
  }
}

@Component({
  selector: 'modify-content-dialog',
  templateUrl: 'modify-content-dialog.html',
})
export class ModifyContentDialogComponent {
  temptags: string = "";
  tempid: string = "";

  constructor(
    public dialogRef: MatDialogRef<ModifyContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataTheDialogIsReceiving: Content,
  ) {
    this.tempid = String(dataTheDialogIsReceiving.id) ?? "";
    this.temptags = (dataTheDialogIsReceiving.tags ?? []).join();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  sendDataBack(): void { //alternative way to send data back
    // we could potentially process temp tags and temp id here,
    // and update the dataTheDialogIsReceiving value
    this.dialogRef.close({
      content: this.dataTheDialogIsReceiving,
      tags: this.temptags,
      id: this.tempid
    });
  }

}

