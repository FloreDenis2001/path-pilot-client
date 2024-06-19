export default interface Order {
    awb: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    deliveryDescription: string;
    orderDate: Date;
    totalAmount: number;
}