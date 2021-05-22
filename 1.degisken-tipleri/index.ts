// Fonksiyonun aldığı n1 ve n2 parametreleri şu haliyle 'any' olarak atanır.
function add1(n1, n2) {
    return n1 + n2
}

const number1 = "5";
const number2 = 2.8;

const result1 = add1(number1, number2)
console.log("Hatalı sonuç: ", result1)
/*
javascript number2 değişkenini de string olarak alarak 
her iki değişkeni yanyana getirmek suretiyle bir sonuç üretiyor. 
*/

// *************************************************************************************************************

/*
 Fonksiyonun aldığı n1 ve n2 parametreleri number tipinde belirleniyor. 
 number tipi haricinde bir değer göndermeye çalışırsak, Typescriptin type check sistemi
 development zamanında bizi uyaracaktır.(Kod compile edilmeden önce)
 Buradaki hata javascripte dönüştürülmeyeceği anlamına gelmez. Dosyamız yine javascripte dönüştürülür
 Fakat type checking kuralına uymamış oluruz.
*/
function add2(n1: number, n2: number) {
    return n1 + n2
}

// number1 değişkeni string olarak tanımlanmış. 
const result2 = add2(number1, number2)
console.log("Hatalı sonuç: ", result2)

// *************************************************************************************************************

function add3(n1: number, n2: number) {
    return n1 + n2
}

const number3 = 5;
const number4 = 2.8;

const result3 = add2(number3, number4)
console.log("Doğru sonuç: ", result3)

// *************************************************************************************************************

const nmb1 = 5;
let nmb2 = 10;

let nmb3: number = 10; // pratik olmayan yaklaşım. ilk değer ile zaten hangi tipte olduğu belirleniyor.
let nmb4: number; // İlk değer verilmeden hangi tipte tanımlandığı belirleniyor.

nmb3 = 16;
nmb4 = "34" // development aşmadında typescript bizi uyarıyor. number olması gereken yere string atamaya çalışıyoruz.

// *************************************************************************************************************

/*
    Aşağıdaki tanımlamada person değişkeninin bir object olduğu belirtilmiştir. Buna rağmen konsola person.name yazdırmak
    istersek typescriptin hata verdiğini görebiliyoruz. Bunun nedeni object içerisinde tanımlanan key lerin de tiplerinin belirlenmemiş 
    olmasıdır. 
*/
const person1: object = {
    name: "Ahmet",
    age: 35,
}

console.log(person1.name) // typescript obje içinde olmayan key değerini hemen farkeder. Console da undefined döner

// Aşağıdaki tanımlamada ise object olarak tanımlanan değişkenin key değerlerinin de tiplerinin belirlendiği görülmektedir.
const person2: {
    name: string,
    age: number
} = {
    name: "Ahmet",
    age: 35,
}

console.log(person2.name) // typescript obje içinde olmayan key değerini hemen farkeder. Console da undefined döner
