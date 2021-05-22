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
// *************************************************************************************************************
var person = {
    name: "Ahmet",
    age: 35
};
console.log(person.nick); // typescript obje içinde olmayan key değerini hemen farkeder.
