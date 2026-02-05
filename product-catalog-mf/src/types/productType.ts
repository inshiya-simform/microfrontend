type User = {
    firstname: string;
    lastname: string;
    profileImage: string;
}
type Review = {
    user : User;
    comment: string;
    rated: number;
}
export type Product = {
    id: string;
    title: string;
    cost: number;
    description: string;
    category: string;
    stock: number;
    isWishlisted: boolean;
    quantityAdded: number;
    rating: number;
    reviews: Review[];
}