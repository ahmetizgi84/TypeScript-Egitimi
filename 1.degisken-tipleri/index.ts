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

// *********************************************** OBJECT **************************************************************

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

// *********************************************** TUPPLE AND ARRAY **************************************************************

const person3 = {
    name: "Ahmet",
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: [1, "string"]
}

let favouriteActivities: string[]
favouriteActivities = 'Sports' // Hayır!
favouriteActivities = ['Sports', 3] // Hayır!
favouriteActivities = ['Sports', 'Cooking'] // Evet

person3.role = [1, 'admin']

let favs: any[]
favs = ['Sports', 1] // Evet

for (const hobby of person3.hobbies) {
    console.log(hobby)
}

// ******************************************* ENUM ******************************************************************

// Javascriptte kullanılan klasik rol atama yöntemi
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

// enum olarak tanımlanan değişkenler custom type oldukları için Büyük Harfle başlamalıdırlar.
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person4 = {
    name: 'Ahmet',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


if (person4.role === Role.AUTHOR) console.log('is author')

// ******************************************* UNION ******************************************************************

function combine(inp1: number, inp2: number) {
    const result = inp1 + inp2
    return result
}

//combine fnsiyonu number tipinde parametre aldığı için aşağıdaki örnekte typescript uyarı vermiyor
const combinedAges1 = combine(30, 26)
console.log("Combined ages1: ", combinedAges1)

/*
 Fakat aşağıdaki gibi number alması gereken fnksiyona string tipinde parametre göndermeye kalkarsak 
 typescript uyarı veriyor.
 Peki bu fonksiyona hem number tipinde hem de string tipinde parametreler göndermek istersem ne yapmalıyım?
 burada `pipe` `|` operatörü kullanarak parametreleri union tipinde tanımlayabiliriz.
*/
const combinedNames1 = combine('Max', 'Anna')
console.log("Combined names1: ", combinedNames1)

function combine2(inp1: number | string, inp2: number | string) {
    let result: number | string;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2
    } else if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        result = inp1.toString() + inp2.toString()
    }
    return result
}

const combinedAges2 = combine2(30, 26)
console.log("Combined ages2: ", combinedAges2)

const combinedNames2 = combine2('Max', 3)
console.log("Combined names2: ", combinedNames2)


function combine3(inp1: number | string, inp2: number | string, resultConversion: string) {
    let result: number | string;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2
    } else if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        result = inp1.toString() + inp2.toString()
    }
    if (resultConversion === "as-number") {
        return +result; // === parseFloat(result)
    } else {
        return result.toString();
    }
}

const combinedAges3 = combine3(30, 26, "as-number")
console.log("Combined ages2: ", combinedAges3)

const combinedStringAges3 = combine3("30", "26", "as-number")
console.log("Combined string ages3: ", combinedStringAges3)


const combinedNames3 = combine3('Max', 3, "as-text")
console.log("Combined names2: ", combinedNames3)


type Combinable = number | string;

// resultConversion parametresi string olarak sadece iki farklı kelimeyi kabul eder. 
function combine4(inp1: Combinable, inp2: Combinable, resultConversion: 'as-number' | 'as-text') {
    let result: number | string;
    if (typeof inp1 === 'number' && typeof inp2 === 'number' || resultConversion === "as-number") {
        result = +inp1 + +inp2
    } else if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        result = inp1.toString() + inp2.toString()
    }
    return result;
}

