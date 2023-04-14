export interface Search {
  key: string;
  title: string;
  edition_count: number;
  public_scan_b: boolean;
  author_key: string[];
  ia: string[];
  has_fulltext: boolean;
  cover_i: number;
  author_name: string[];
  first_publish_year: number;
}

export interface SearchResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Search[];
  num_found: number;
  q: string;
  offset: number;
}
