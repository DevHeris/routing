import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private router = inject(Router);

  constructor() {}

  ngOnInit() {}

  onLoadServers() {
    // Complex calculation

    // Programatic navigation
    this.router.navigate(['/servers']);
  }
}
