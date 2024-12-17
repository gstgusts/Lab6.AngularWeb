import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  name: string;
  surname: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Lab6.AngularWeb';
  public students: Student[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.http.get<Student[]>('http://localhost:5205/api/Students').subscribe(
      (result) => {
        this.students = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
