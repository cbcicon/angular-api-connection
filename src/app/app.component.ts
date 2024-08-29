import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';


  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const apiUrl = 'http://localhost:5050/api/InventoryHeader/GetAllInventoryHeadersTbl';  
    this.http.get<any>(apiUrl).subscribe(
      response => {
        this.data = response;
        console.log(this.data);  
      },
      error => {
        console.error('There was an error!', error); 
      }
    );
  }

}
