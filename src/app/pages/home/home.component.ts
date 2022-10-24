import { Component, OnInit } from '@angular/core';
import { MockingService } from 'src/app/services/mocking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private data: any | null = null;

  constructor(private mockService: MockingService) {}

  ngOnInit(): void {
    this.mockService.getAll().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }
}
