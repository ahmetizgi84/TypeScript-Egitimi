"use strict";
// Fonksiyonun aldığı n1 ve n2 parametreleri şu haliyle 'any' olarak atanır.
function add1(n1, n2) {
    return n1 + n2;
}
var number1 = "5";
var number2 = 2.8;
var result1 = add1(number1, number2);
console.log("Hatalı sonuç: ", result1);
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
function add2(n1, n2) {
    return n1 + n2;
}
// number1 değişkeni string olarak tanımlanmış. 
var result2 = add2(number1, number2);
console.log("Hatalı sonuç: ", result2);
// *************************************************************************************************************
function add3(n1, n2) {
    return n1 + n2;
}
var number3 = 5;
var number4 = 2.8;
var result3 = add2(number3, number4);
console.log("Doğru sonuç: ", result3);
// *************************************************************************************************************
var nmb1 = 5;
var nmb2 = 10;
var nmb3 = 10; // pratik olmayan yaklaşım. ilk değer ile zaten hangi tipte olduğu belirleniyor.
var nmb4; // İlk değer verilmeden hangi tipte tanımlandığı belirleniyor.
nmb3 = 16;
nmb4 = "34"; // development aşmadında typescript bizi uyarıyor. number olması gereken yere string atamaya çalışıyoruz.
// *********************************************** OBJECT **************************************************************
/*
    Aşağıdaki tanımlamada person değişkeninin bir object olduğu belirtilmiştir. Buna rağmen konsola person.name yazdırmak
    istersek typescriptin hata verdiğini görebiliyoruz. Bunun nedeni object içerisinde tanımlanan key lerin de tiplerinin belirlenmemiş
    olmasıdır.
*/
var person1 = {
    name: "Ahmet",
    age: 35,
};
console.log(person1.name); // typescript obje içinde olmayan key değerini hemen farkeder. Console da undefined döner
// Aşağıdaki tanımlamada ise object olarak tanımlanan değişkenin key değerlerinin de tiplerinin belirlendiği görülmektedir.
var person2 = {
    name: "Ahmet",
    age: 35,
};
console.log(person2.name); // typescript obje içinde olmayan key değerini hemen farkeder. Console da undefined döner
// *********************************************** TUPPLE AND ARRAY **************************************************************
var person3 = {
    name: "Ahmet",
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: [1, "string"]
};
var favouriteActivities;
favouriteActivities = 'Sports'; // Hayır!
favouriteActivities = ['Sports', 3]; // Hayır!
favouriteActivities = ['Sports', 'Cooking']; // Evet
person3.role = [1, 'admin'];
var favs;
favs = ['Sports', 1]; // Evet
for (var _i = 0, _a = person3.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// ******************************************* ENUM ******************************************************************
// Javascriptte kullanılan klasik rol atama yöntemi
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
// enum olarak tanımlanan değişkenler custom type oldukları için Büyük Harfle başlamalıdırlar.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person4 = {
    name: 'Ahmet',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person4.role === Role.AUTHOR)
    console.log('is author');
// ******************************************* UNION ******************************************************************
function combine(inp1, inp2) {
    var result = inp1 + inp2;
    return result;
}
//combine fnsiyonu number tipinde parametre aldığı için aşağıdaki örnekte typescript uyarı vermiyor
var combinedAges1 = combine(30, 26);
console.log("Combined ages1: ", combinedAges1);
/*
 Fakat aşağıdaki gibi number alması gereken fnksiyona string tipinde parametre göndermeye kalkarsak
 typescript uyarı veriyor.
 Peki bu fonksiyona hem number tipinde hem de string tipinde parametreler göndermek istersem ne yapmalıyım?
 burada `pipe` `|` operatörü kullanarak parametreleri union tipinde tanımlayabiliriz.
*/
var combinedNames1 = combine('Max', 'Anna');
console.log("Combined names1: ", combinedNames1);
function combine2(inp1, inp2) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2;
    }
    else if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
var combinedAges2 = combine2(30, 26);
console.log("Combined ages2: ", combinedAges2);
var combinedNames2 = combine2('Max', 3);
console.log("Combined names2: ", combinedNames2);
function combine3(inp1, inp2, resultConversion) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2;
    }
    else if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        result = inp1.toString() + inp2.toString();
    }
    if (resultConversion === "as-number") {
        return +result; // === parseFloat(result)
    }
    else {
        return result.toString();
    }
}
var combinedAges3 = combine3(30, 26, "as-number");
console.log("Combined ages2: ", combinedAges3);
var combinedStringAges3 = combine3("30", "26", "as-number");
console.log("Combined string ages3: ", combinedStringAges3);
var combinedNames3 = combine3('Max', 3, "as-text");
console.log("Combined names2: ", combinedNames3);
// resultConversion parametresi string olarak sadece iki farklı kelimeyi kabul eder. 
function combine4(inp1, inp2, resultConversion) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number' || resultConversion === "as-number") {
        result = +inp1 + +inp2;
    }
    else if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
