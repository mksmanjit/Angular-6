import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';
/* tslint:disable:no-unused-variable */
import { fakeAsync, async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { from } from 'rxjs';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });
 // ng test --source-map=false
  it('should load todos from the server', async(() => {
     const service = TestBed.get(TodoService);
    // This is used if provider is given at component level.
     fixture.debugElement.injector.get(TodoService);
     spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

     fixture.detectChanges();

     fixture.whenStable().then(() => {
       expect(component.todos.length).toBe(3);
       console.log('EXPECT WAS CALLED');
     });
  }));
  it('should load todos from the server with fakeAsync', fakeAsync(() => {
     const service = TestBed.get(TodoService);
    // This is used if provider is given at component level.
     fixture.debugElement.injector.get(TodoService);
     spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

     fixture.detectChanges();

     tick();
     expect(component.todos.length).toBe(3);
  }));
});
