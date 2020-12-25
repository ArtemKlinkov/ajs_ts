import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    delete(id: number): void {
        const foundItemIndex: number = this._items.findIndex((element) => { if (element.id === id) return element} );
        if (foundItemIndex !== -1) {
            this._items.splice(foundItemIndex, 1);
        } else {
            throw new Error('В корзине нет такого элемента!');
        }
    }

    getTotal(): number {
        const sum: number = this._items.reduce((acc, currentValue) => acc + currentValue.price, 0);
        return sum;
    }

    getDiscount(discount: number): number {
        const total: number = this.getTotal();
        return Number((total - total * (discount / 100)).toFixed(2));
    }
}