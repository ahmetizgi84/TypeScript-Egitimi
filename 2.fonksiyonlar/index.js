/**
 * Aşağıda bir fonksiyon tanımlanmış ancak bu fonksiyonun
 * ne tür bir değer döndüreceği tanımlanmamıştır.
 * Ancak bu fonksiyon için şu söylenebilir:
 * Aldığı her iki parametrenin number tipinde olduğu göz önünde bulundurulursa
 * her iki number tipinin toplamı da number olacağıdan bu fonksiyonun return edeceği değer için
 * numberdır denebilir.
 */
function add1(n1, n2) {
    return n1 + n2;
}
/**
 * Her ne kadar alması gereken parametreler number tipinde olsa da
 * bir fonksiyon en nihayetinde string değer de döndürebilir.
 */
function add2(n1, n2) {
    return n1.toString() + n2.toString();
}
/**
 * bir fonksiyonun ne tür bir değer döndürmesi gerektiğini belirtmek istersek;
 * fonksiyonu aşağıdaki gibi tanımlamalıyız.
 */
function add3(n1, n2) {
    return n1 + n2;
}
/**
 * C#, C++, Java gibi dillerden de hatırlayacağımız üzere herhangi bir değer döndürmeyen
 * fonksiyonlar da bulunmaktadır. Javascript tarafında olmasa da typescript tarafında bu tür fonksiyonları
 * tanımlayabiliriz. Fonksiyon bir değer döndürmüyorsa, değer döndürmediğini ifade eden 'void' anahtar kelimesini
 * kullanabiliriz.
 */
function printResult(num) {
    console.log("Result: ", num);
}
printResult(add3(12, 8));
/**
 * bir fonksiyonu pointer olarak yani hafızada bulunduğu yeri bir başka değişkenin içine atmak süretiyle de kullanabiliriz.
 */
function add4(n1, n2) {
    return n1 + n2;
}
var combineValues;
combineValues = add4;
console.log(combineValues(8, 8));
