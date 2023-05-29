export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
}

export interface Info {
  next: string;
  prev: null;
  pages: number;
}

export interface Data {
  info: Info;
  results: Character[];
}

export interface pagesButtonInitialState {
  page: number;
}
