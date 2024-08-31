let num:number = 0;
let str:string = "";
let un : undefined = undefined;
let myNull :null = null;

let _ :unknown = 123;

function sum(num1:number,num2:number = 50):number{
    return num1 + num2;
}

interface Person{
    [key:string] : number | string;
}

/**
 * 交叉类型 & 也就是合并类型
 */
interface typeOne{
    a:string,
    b:number
}

type abc = typeOne & {
    c:boolean
}
let obj:abc = {
    a:"",
    b:123,
    c:true
}

type PersonTwo = abc  // 类型别名


interface Person {
    name: string
}

interface Person {         // 重复声明 interface，就合并了
    age: number
}

let person :Person = {
    name:"",
    age:123,
    abc:123,
    acc:123
}
