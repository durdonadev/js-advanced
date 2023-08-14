class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}
// Example: const apple = new Good(1, “Apple”, 50, 0.5);
class Inventory {
    constructor() {
        this.goods = [];
    }
    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            const singleGood = this.goods[i];
            if (singleGood.id === good.id) {
                throw new Error("Good already exists in the inventory.");
            }
        }
        this.goods.push(good);
    }
    removeGood(id) {
        for (let i = 0; i < this.goods.length; i++) {
            const singleGood = this.goods[i];
            if (singleGood.id === id) {
                return this.goods.splice(i, 1);
            }
        }
        throw new Error("Good not found in the inventory");
    }
    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                return (this.goods[i] = updatedGood);
            }
        }
        throw new Error("Good not found in inventory.");
    }
    viewGoods() {
        return this.goods;
    }
    searchGoodByName(name) {
        const matchedGoods = [];
        let i = 0;
        while (i < this.goods.length) {
            if (this.goods[i].name === name) {
                matchedGoods.push(this.goods[i]);
                // return this.goods[i];     this works as well. But we have to return a new array.
            }
            i++;
        }
        return matchedGoods;
    }
    applyDiscount(percent) {
        for (let i = 0; i < this.goods.length; i++) {
            this.goods[i].price *= 1 - percent / 100;
        }
    }
    generalSalesReport() {
        let obj = { totalRevenue: 0, totalSoldItem: 0, averagePrice: 0 };
        for (let i = 0; i < this.goods.length; i++) {
            obj.totalRevenue += this.goods[i].price * this.goods[i].quantity;
            obj.totalSoldItem += this.goods[i].quantity;
        }
        obj.averagePrice = obj.totalRevenue / obj.totalSoldItem;
        return obj;
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
// const apple1 = new Good(1, “Apple”, 50, 0.5);
// 1st condition. inventory.sellGood(1, 20)  >=     (1, “Apple”, 30, 0.5);
// 2nd condition. inventory.sellGood(1, 80)  >=     (1, “Apple”, 50, 0.5);   =>   throw New Error (“Given Quantiy exceeds stock, not enough in the stock.“)
const apple1 = new Good(1, "Apple", 50, 0.5);
const apple2 = new Good(5, "Apple", 30, 1.2);
const banana = new Good(2, "Banana", 40, 0.6);
const orange = new Good(3, "Orange", 60, 1);
const inventory = new Inventory();
const updatedGood = new Good(1, "Apple", 60, 0.8);
inventory.addGood(apple1);
inventory.addGood(apple2);
inventory.addGood(banana);
inventory.addGood(orange);
inventory.removeGood(2);
console.log(inventory.viewGoods());
inventory.updateGood(1, updatedGood);
inventory.applyDiscount(30);
console.log(inventory.viewGoods());
console.log(inventory.searchGoodByName("Apple"));
console.log(inventory.generalSalesReport());
console.log(inventory.sellGood(1, 20));
