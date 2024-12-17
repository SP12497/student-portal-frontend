import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCoursesByStudentId(studentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${studentId}/courses`);
  }
}
