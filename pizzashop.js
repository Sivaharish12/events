const EventEmitter=require("node:events")

class pizzashop extends EventEmitter{
    constructor(){
        super();
        this.ordernumber=0;
    }
    order(size,toppings){
        this.ordernumber++;
        this.emit("order",size,toppings);
    }
    displayordernumber(){
        console.log(`Current Order Number is ${this.ordernumber}`);
    }
}

module.exports=pizzashop