import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpSvc = inject(HttpClient);

  getTasks(): Observable<Task[]> {
    return this.httpSvc.get<Task[]>(`${environment.apiUrl}/public/v2/todos`);
  }
}
