export interface IContainer {
    id: number;
    train: string;
    ship: string;
    product: string;
    product_weight: number;
    container_weight: number;
    arrivedDate: string;
}

class Container implements IContainer {
    public id: number;
    public train: string;
    public ship: string;
    public product: string;
    public product_weight: number;
    public container_weight: number;
    public arrivedDate: string;

    constructor(container: IContainer){
        const {id, train, ship, product, product_weight, container_weight, arrivedDate} = container;
        this.id = id;
        this.train = train;
        this.ship = ship;
        this.product = product;
        this.product_weight = product_weight;
        this.container_weight = container_weight;
        this.arrivedDate = arrivedDate;
    }
}

export default Container;