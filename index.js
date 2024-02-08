const Pizzashop=require('./pizzashop')
const DrinkMachine=require('./making-drinks')


const pizzashop=new Pizzashop()
const drinkmachine=new DrinkMachine()

pizzashop.on('order',(size,toppings)=>{
    console.log(`The order placed to bake a ${size} pizza with ${toppings}.`);
    drinkmachine.serveDrinks(size);
})

pizzashop.order("large","mushrooms")
pizzashop.displayordernumber()