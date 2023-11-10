import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { IonIcon, IonItem, IonLabel, IonList, IonText } from '@ionic/angular/standalone';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { ModalElementComponent } from '../modal-element/modal-element.component';
import { TaskStatus } from '../../enums/task-status.enum';

@Component({
  selector: 'task-elements',
  templateUrl: './task-elements.component.html',
  styleUrls: ['./task-elements.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, SlicePipe, IonItem, IonList, IonLabel, IonIcon, IonText, ModalElementComponent]
})
export class TaskElementsComponent  implements OnInit {
  @Input() tasks: Task[] = [];
  task!: Task;

  ngOnInit() {}

  setModalData(task: Task): void {
    this.task = task;
  }

  get TaskStatus() {
    return TaskStatus;
  }
}
