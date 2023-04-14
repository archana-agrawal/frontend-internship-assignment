import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { Search } from 'src/app/core/models/search-response.model';

@Component({
  selector: 'front-end-internship-assignment-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResult: Search[] = [];
  totalResults: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  loading: boolean = false;
  errorMessage: string = '';
  totalPages: number = 0;
  displayedColumns: string[] = ['title', 'author', 'publish_date'];
  @Output() searchResultEvent = new EventEmitter<Search[]>();
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  searchBooks() {
    if (this.searchQuery.trim() === '') {
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.searchResult = [];
    this.currentPage = 0;
    this.totalPages = 0;

    this.searchService
      .getSearchByBookTitle(this.searchQuery, this.pageSize, 0)
      .subscribe(
        (results) => {
          console.log(results);
          this.searchResult = results.docs;
          this.totalResults = results.numFound;
          this.totalPages = Math.ceil(this.totalResults / this.pageSize);
          this.loading = false;
          this.searchResultEvent.emit(this.searchResult)
        },
        (error) => {
          this.loading = false;
          this.errorMessage =
            'An error occurred while fetching search results.';
          console.error(error);
        }
      );
  }

  clearSearch() {
    this.searchQuery = '';
  }

  searchBooksByPage(pageNumber: number) {
    const offset = (pageNumber) * this.pageSize;
    this.loading = true;
    this.errorMessage = '';
    this.searchResult = [];

    this.searchService
      .getSearchByBookTitle(this.searchQuery, this.pageSize, offset)
      .subscribe(
        (response) => {
          this.loading = false;
          this.searchResult = response.docs;
        },
        (error) => {
          this.loading = false;
          this.errorMessage =
            'An error occurred while fetching search results.';
          console.error(error);
        }
      );
  }

  pageChanged(event: any): void {
    console.log(event.pageIndex)
    this.currentPage = event.pageIndex;
    this.searchBooksByPage(this.currentPage);
  }

  ngOnInit(): void {
    this.loading = true
  }
}
