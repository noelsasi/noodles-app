export interface IBrand {
  Brand: string;
  Variety: string;
  Style: string;
  Country: string;
  Stars: number | string;
  'Top Ten': string;
}

type Noodle = {
  list: IBrand[];
  images: IImage[];
};

export type Reducers = {
  noodle: Noodle;
};

export interface IImage {
  Image: string;
}
