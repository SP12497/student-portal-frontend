import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {

  students: any[] = [];
  selectedStudentId: number | null = null;
  courses: any[] = [];
  

  constructor(private _studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this._studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }

  onStudentChange(): void {
    if (this.selectedStudentId) {
      this._studentService.getCoursesByStudentId(this.selectedStudentId).subscribe(
        (data) => {
          this.courses = data;
        },
        (error) => {
          console.error('Error fetching courses for student', error);
        }
      );
    }
  }
}
