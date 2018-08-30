import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
  constructor(private http: Http) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(r => r.json()));
  }

  getTodos() {
    return this.http.get('...').pipe(map(r => r.json()));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map(r => r.json())).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe(map(r => r.json()));
  }
}
