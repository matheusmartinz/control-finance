import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [CardModule, ButtonModule, TableModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
