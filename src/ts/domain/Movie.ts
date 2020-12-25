import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly originalName: string,
        readonly year: number,
        readonly tagline: string,
        readonly genre: string,
        readonly duration: number,
        readonly price: number,
    ) { }
}