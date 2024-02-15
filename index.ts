interface Customers{
    id:number;
    name:string;
    email:string;
    location:{
        city:string;
        country:string;
    }

    
}
interface Orders{
  orderId:number;
  customerId:number;
  product:string;
  quantity:number;
  price:number;  
}
const customers:Customers[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
  { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
];
const orders:Orders[] = [
  { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
  { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
  
];

// task:1
const emailList=customers.map(user=>user.email)
console.log(emailList)
// task:2
const highValueOrders=orders.filter(order=> order.quantity * order.price >1000)
console.log(highValueOrders);
// task:3
const customerAlice=customers.find(customer=>customer.name === 'Alice')
console.log(customerAlice);
// task:4
const indexOrder102=orders.findIndex(order => order.orderId ===102)
console.log(indexOrder102);
// task:5
const hasOrdersInUSA = customers.some(customer => customer.location.country === 'USA');
console.log(hasOrdersInUSA);
// task:6
orders.forEach(order => {
    const customer = customers.find(customer => customer.id === order.customerId);
    if (customer) {
        const customerName = customer.name;
        console.log(`Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`);
    }
});
// task:7
const sortedCustomers=customers.sort((a,b)=>a.name.localeCompare(b.name))
console.log(sortedCustomers);
