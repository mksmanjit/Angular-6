import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading = false;
  progress = 0;
  timer;

  constructor(private dialog: MatDialog) {
    this.isLoading = true;
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) { clearInterval(this.timer); }
    }, 20);

    this.getCourses()
        .subscribe(x => this.isLoading = false);
  }

  colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'}
  ];

  categories = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'}
  ];
  isChecked = true;
  title = 'app';

  color = 2;
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  onChange($event) {
    console.log(event);
  }

  selectCategory(category) {
    this.categories.filter(c => c !== category).forEach(c => c['selected'] = false);
    category.selected = !category.selected;
  }

  getCourses() {
    return timer(2000);
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data : { courseId: 1}
    })
        .afterClosed()
        .subscribe(result => console.log(result));
  }

}
