import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { SearchResponse } from 'src/app/core/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apiService: ApiService) {}

  getSearchByBookTitle(searchTerm: string, limit: number, offset: number): Observable<SearchResponse> {
    return this.apiService.get(
      `/search.json?author=${searchTerm.toLowerCase()}&limit=${limit}&offset=${offset}`
    );
  }
}
