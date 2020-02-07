export enum TypeFooter {
    login = 1,
    all
}

export interface Tokens {
    token : string;
    refresh_token : string;
}


export interface DataResponse {
    success : boolean;
    message : string;
    data    : any;
    status ?: number;
    url    ?: string;
}

export interface RspOrderSeller extends DataResponse {
    data: OrderSeller[];
}

export interface OrderSeller {
    work_code:  string
}
