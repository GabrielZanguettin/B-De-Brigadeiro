export interface Product {
  id: number;
  name: string;
  price: string;
  slug: string;
  base: string;
  description: string;
}

export interface ProductLike { slug: string; }

export type PageTransitionOpts = {
  enterMs: number;
  exitMs: number;
  offsetPx: number;
  delayInMs: number;
};