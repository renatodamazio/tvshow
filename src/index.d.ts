declare module "*.jpg";
declare module "*.png";
declare module "*.png" {
  export const src: string;
}

declare module "*.png" {
  export const value: any;
}
