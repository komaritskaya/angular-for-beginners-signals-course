import { Component, input, output } from '@angular/core';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Course, CourseCategory } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [CurrencyPipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  course = input.required<Course>();
  index = input.required<number>();

  editStarted = output<Course>();

  onCardClick(event: MouseEvent) {
    console.log('Card clicked', this.course().title);
  }

  onEditClick(event: MouseEvent) {
    event.stopPropagation();
    this.editStarted.emit(this.course());
  }
}
