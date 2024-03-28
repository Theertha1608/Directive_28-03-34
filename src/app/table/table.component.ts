import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  showTable: boolean = false;
  colorChanged: boolean = false;

  toggleTable() {
    this.showTable = !this.showTable;
  }

  changeColor1() {
    this.colorChanged = !this.colorChanged;
  }
}
