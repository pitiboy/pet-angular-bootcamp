export interface FilterOptions {
  [key: string]: any;
  region: string;
  dateTo: number;
  dateFrom: number;
  minor: boolean;
  adults: boolean;
  middleAged: boolean;
  retired: boolean;
}

export interface VideoView {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: VideoView[];
}
