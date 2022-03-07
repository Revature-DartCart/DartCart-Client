import store from "./store";

export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    registrationDate: number;
}

export interface Seller {
    id: number;
    name: string;
    homepage: string;
    description: string;
    user: User;
}

export interface Shop {
    id: number;
    location: string;
    seller: Seller;
}

export interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

export type RootState = ReturnType<typeof store.getState>;
export type SecurityToken = string;
export type AppDispatch = typeof store.dispatch;
