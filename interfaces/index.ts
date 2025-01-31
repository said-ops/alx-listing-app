// button props
export interface buttonProps{
  text:string,
  height:string,
  bgColor:string,
  textColor:string
  width?:string
}

//property props 
export interface PropertyProps {
    name: string;
    address: {
      state: string;
      city: string;
      country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    };
    image: string;
    discount?: string;
  }
  