export interface MenuStep {
  step: number;
  title: string;
  options: string[];
  note?: string;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}
