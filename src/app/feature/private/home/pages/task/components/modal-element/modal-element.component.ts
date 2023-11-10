import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
import { TaskStatus } from '../../enums/task-status.enum';

@Component({
  selector: 'modal-element',
  templateUrl: './modal-element.component.html',
  styleUrls: ['./modal-element.component.scss'],
  standalone: true,
  imports: [
    DatePipe,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    IonModal,
    IonLabel,
    IonText,
    IonBadge
  ],
})
export class ModalElementComponent implements OnChanges {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() task!: Task;

  ngOnChanges(): void {
    if (this.task) {
      this.modal.present();
    }
  }

  cancel(): void {
    this.modal.dismiss();
  }

  get TaskStatus() {
    return TaskStatus;
  }
}
