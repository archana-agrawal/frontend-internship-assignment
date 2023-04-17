import { Component, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';
import { Search } from 'src/app/core/models/search-response.model';

@Component({
  selector: 'front-end-internship-assignment-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() booksList: Book[] = [];
  @Input() subjectName: string = '';
  @Input() searchList: Search[] = [];

  totalResult: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
}
