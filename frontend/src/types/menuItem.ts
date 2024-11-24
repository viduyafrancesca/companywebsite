export interface MenuItem {
    id: number;
    name: string;
    category: string;
    description: string | null; // Allow nullable description
    price: number;
    imageUrl: string | null; // Allow nullable imageUrl
  }
  