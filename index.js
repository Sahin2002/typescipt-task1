var customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
];
var orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
];
// task:1
var emailList = customers.map(function (user) { return user.email; });
console.log(emailList);
// task:2
var highValueOrders = orders.filter(function (order) { return order.quantity * order.price > 1000; });
console.log(highValueOrders);
// task:3
var customerAlice = customers.find(function (customer) { return customer.name === 'Alice'; });
console.log(customerAlice);
// task:4
var indexOrder102 = orders.findIndex(function (order) { return order.orderId === 102; });
console.log(indexOrder102);
// task:5
var hasOrdersInUSA = customers.some(function (customer) { return customer.location.country === 'USA'; });
console.log(hasOrdersInUSA);
// task:6
orders.forEach(function (order) {
    var customer = customers.find(function (customer) { return customer.id === order.customerId; });
    if (customer) {
        var customerName = customer.name;
        console.log("Order ".concat(order.orderId, " by ").concat(customerName, ": ").concat(order.quantity, " x ").concat(order.product, " for $").concat(order.price, " each."));
    }
});
// task:7
var sortedCustomers = customers.sort(function (a, b) { return a.name.localeCompare(b.name); });
console.log(sortedCustomers);
