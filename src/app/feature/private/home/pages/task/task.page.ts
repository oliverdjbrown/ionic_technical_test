import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './interfaces/task.interface';
import { take } from 'rxjs';
import { TaskElementsComponent } from './components/task-elements/task-elements.component';
import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    TaskElementsComponent,
  ],
})
export class TaskPage implements OnInit {
  tasks: Task[] = [];
  private taskSvc = inject(TaskService);
  private offset = 5;

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const count = this.tasks.length;
    this.taskSvc
      .getTasks()
      .pipe(take(1))
      .subscribe((tasks: Task[]) => {
        this.tasks.push(...tasks.slice(count, count + this.offset));
      });
  }

  onIonInfinite(event: any): void {
    this.getTask();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
