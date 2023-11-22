import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Refrigerators' },
            { id: 2, name: 'Phones' },
            { id: 3, name: 'Laptops' },
            { id: 4, name: 'TV' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Lenovo' },
            { id: 4, name: 'Asus' },
            { id: 5, name: 'OnePlus' }
        ]
        this._devices = [
            { id: 1, name: 'Iphone 11', price: 11000, rating: 1, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 2, name: 'Iphone 12', price: 12000, rating: 2, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 3, name: 'Iphone 13', price: 13000, rating: 3, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 4, name: 'Iphone 14', price: 14000, rating: 4, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 5, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 6, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 7, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 8, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 9, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 10, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 11, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 12, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },
            { id: 13, name: 'Iphone 15', price: 15000, rating: 5, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' },

        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
