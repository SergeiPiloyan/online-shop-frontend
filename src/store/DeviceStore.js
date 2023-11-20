import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Refrigerators' },
            { id: 2, name: 'Phones' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ]
        this._devices = [
            { id: 1, name: 'Iphone 11', price: 11000, rating: 1, img: '6c681eb7-2f5b-4724-9e32-75b5beecd37d.jpg' },
            { id: 2, name: 'Iphone 12', price: 12000, rating: 2, img: '6c681eb7-2f5b-4724-9e32-75b5beecd37d.jpg' },
            { id: 3, name: 'Iphone 13', price: 13000, rating: 3, img: '6c681eb7-2f5b-4724-9e32-75b5beecd37d.jpg' },
            { id: 4, name: 'Iphone 14', price: 14000, rating: 4, img: '6c681eb7-2f5b-4724-9e32-75b5beecd37d.jpg' },
            { id: 5, name: 'Iphone 15', price: 15000, rating: 5, img: '6c681eb7-2f5b-4724-9e32-75b5beecd37d.jpg' }
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    senDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}
