export interface ContactModel {
    id: number;
    created_at: Date;
    name: string;
    last_name: string;
    phone: string;
    email: string;
    age: number;
    is_favorite: boolean;
    user_id: string;
}
export interface ContactCreateModel {
    name: string;
    last_name: string;
    phone: string;
    email: string;
    age: number;
}
