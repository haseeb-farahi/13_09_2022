// {



// function pen(_name,_color,_price){
//     this.name = _name;
//     this.color = _color;
//     this.price = _price;
// }


// pen.prototype.shoPenDetails = function(){
//     return 'the pen name is ' + this.name + 'its ' + this.color + 'color and it\s price is ' + this.price;

// }

// let obj = new pen ('Pinow Cristal', 'Blue',10)

// console.log(obj.shoPenDetails())



// class PenCil{
//     constructor(name,color,price){
//         this.name = name;
//         this.color = color;
//         this.price = orice;
//     }
//     showPenCilDetails(){
//       return 'the pen name is $ {this.color} and its price is ${this.price}'
//     }     



// class Rectengle{
//     constructor(height,width,color){
//         this.height = 50;
//         this.width = 50;
//         this.color = 'black';
//     }

//     show(){
//         return `the rectengle height ${this.height} its color is ${this.color}`
//     }

// }

// let obj = new Rectengle(50, 50, 'black')
// console.log(obj.show())





class person {
    constructor(name,lname,age,hight,width,colorofeye,colorofskin){
        this.name = name;
        this.lname = lname;
        this.age = age;
        this.hight = hight;
        this.width = width;
        this.colorofeye = colorofeye;
        this.colorofskin = colorofskin
    }
        show(){
            return `the person name is ${this.name} its lname is ${this.lname}and its age is ${this.age}and its hight is ${this.hight}and its width is ${this.width}and its colorofeye is ${this.colorofeye}and its colorofskin is ${this.colorofskin} `
        }

        talk(){
            return `my name is ${this.name}and i can talk`
        }
        see(){
            return `my eye color is ${this.colorofeye}and i can see`
        }
        walk(){
            return `hight ${this.hight}`

        }
}


let obji = new person('haseeb', 'farahi', 19 , 178, 80,'brown', 'quitewhite')

console.log(obji.show())
console.log(obji.talk())
console.log(obji.see())
console.log(obji.walk())

var doc = document.getElementById('demo');
// doc.innerHTML = obji.show();


class Age {
    constructor(name, age ){
        this.name = name;
        this.age = age;
    }
   
    myAge(){
         
        return`my name ${this.name} and iam ${this.age}`
    }
}


let objh = new Age('haseeb',2003)



console.log(objh.myAge())



class Car{
    constructor(brand){
        this.brand = brand;
    }
    myCarName(){
        return `my Car name is ${this.brand}`
    }
}
class Model extends Car{
    constructor(brand,model){
        super(brand)
        this.model = model;
       
    }
    showModel(){
        return this.myCarName() + `and its model is `+ this.model;
    }
}

// let obj = new Car('benz')
// console.log(obj.myCarName())
let obj = new Model('BMW',2000)
console.log(obj.showModel())


class Person {
    constructor(name){
        this.name = name;
       

    }

    get gpname(){
        return `the person name is  ${this.name} `;

    }
    set spname(pNewName){
        this.name= pNewName
    }

    age (){
        return 'my age is 19'
    }

    static plname(){
        return 'hi im static method'
    }
}

let pobj = new Person('khan')
console.log(pobj.gpname)
pobj.spname = 'haseeb';

console.log(pobj.gpname)

pobj.spname = 'wadan';
console.log(pobj.gpname)

console.log(pobj.age())
console.log(Person.plname())



