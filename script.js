
//assignment-4
class Cars{
  constructor(brand,color,series,uber_price){
    this.brand=brand;
    this.color=color;
    this.series=series;
    this.uber_price=uber_price;
  }
  //method
  getbrand(){
    return this.brand;
  }
  getuber_price(){
    return this.uber_price*3;
  }}
  var s1=new Cars("audi","white","a6",1000);
  console.log(s1.getuber_price());

//assignment-4
class Person{
  constructor(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
  }
}
var A=new Person("priya",21,30000)
console.log(A)