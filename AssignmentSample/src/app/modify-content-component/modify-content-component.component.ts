import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';

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
  newContent: Content;
  temptags: string = "";
  tempid: string = "";

  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private digimonService: DigimonService, public dialog: MatDialog) {
    this.newContent = { title: '', description: '', creator: '' };
  }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyContentDialogComponent, {
      width: '400px',
      data: this.newContent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed');
      this.newContent = result.content;
      this.tempid = result.id;
      this.temptags = result.tags;
      this.modifyOrAddItemToParent();
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
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  sendDataBack(): void { //alternative way to send data back
    this.dialogRef.close({
      content: this.data,
      tags: this.temptags,
      id: this.tempid
    });
  }

}

