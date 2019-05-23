export interface ItemAlert {
    id?: number;
    alertItemId?: number;
    threshold?: number;
    dateUnder?: Date;
    dateOrdered?: Date;
    alertOn?: boolean;
    alertStatus?: boolean;
}
