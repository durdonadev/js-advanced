class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class Inventory {
    constructor() {
        this.goods = []; // [{id:1, name: "apple", quantity: 50, price: 0.5}]
    }

    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === good.id) {
                throw new Error("Good already exists in inventory.");
            }
        }
        this.goods.push(good);
    }

    remove(id) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                this.goods.splice(i, 1);
                return;
            }
        }
        throw new Error("Good not found in inventory.");
    }

    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                this.goods[i] = updatedGood;
                return;
            }
        }
        throw new Error("Good not found in inventory.");
    }

    viewGoods() {
        return this.goods;
    }

    searchGoodByName(name) {
        const searchResult = [];
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].name === name) {
                searchResult.push(this.goods[i]);
            }
        }
        return searchResult;
    }

    applyDiscount(percent) {
        for (let i = 0; i < this.goods.length; i++) {
            this.goods[i].price =
                this.goods[i].price - (this.goods[i].price * percent) / 100;
        }
    }

    generateSalesReport() {
        let totalRevenue = 0;
        let totalSoldItems = 0;

        for (let i = 0; i < this.goods.length; i++) {
            totalRevenue += this.goods[i].price * this.goods[i].quantity;
            totalSoldItems += this.goods[i].quantity;
        }
        const averagePrice = totalRevenue / totalSoldItems;

        return {
            totalRevenue,
            totalSoldItems,
            averagePrice
        };
    }

    sellGood(id, quantity) {
        for (let i = 0; i < this.goods.length; i++) {
            const item = this.goods[i];
            if (item.id === id) {
                if (item.quantity < quantity) {
                    throw new Error("Not enough quantity in stock.");
                }
                item.quantity -= quantity;
                return {
                    id: id,
                    name: item.name,
                    sold: quantity,
                    remaining: item.quantity
                };
            }
        }
        throw new Error("Good not found in inventory.");
    }
}

const apple = new Good(1, "Apple", 50, 0.5);
const banana = new Good(2, "Banana", 40, 0.6);
const inventory = new Inventory();

inventory.addGood(apple);
inventory.addGood(banana);
console.log(inventory.viewGoods());

console.log(inventory.searchGoodByName("Apple"));

inventory.applyDiscount(10);
console.log(inventory.viewGoods());

inventory.remove(2);
console.log(inventory.viewGoods());

const updatedApple = new Good(1, "Apple", 55, 0.6);
inventory.updateGood(1, updatedApple);
console.log(inventory.viewGoods());

inventory.sellGood(1, 5);
console.log(inventory.viewGoods());
console.log(inventory.generateSalesReport());
console.log(inventory.sellGood(1, 10));
