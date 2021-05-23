/**
 * Aşağıda bir fonksiyon tanımlanmış ancak bu fonksiyonun 
 * ne tür bir değer döndüreceği tanımlanmamıştır.
 * Ancak bu fonksiyon için şu söylenebilir: 
 * Aldığı her iki parametrenin number tipinde olduğu göz önünde bulundurulursa
 * her iki number tipinin toplamı da number olacağıdan bu fonksiyonun return edeceği değer için 
 * numberdır denebilir.
 */

function add1(n1: number, n2: number) {
    return n1 + n2;
}

/**
 * Her ne kadar alması gereken parametreler number tipinde olsa da 
 * bir fonksiyon en nihayetinde string değer de döndürebilir.
 */
function add2(n1: number, n2: number) {
    return n1.toString() + n2.toString();
}

/**
 * bir fonksiyonun ne tür bir değer döndürmesi gerektiğini belirtmek istersek;
 * fonksiyonu aşağıdaki gibi tanımlamalıyız.
 */
function add3(n1: number, n2: number): number {
    return n1 + n2;
}

/**
 * C#, C++, Java gibi dillerden de hatırlayacağımız üzere herhangi bir değer döndürmeyen
 * fonksiyonlar da bulunmaktadır. Javascript tarafında olmasa da typescript tarafında bu tür fonksiyonları
 * tanımlayabiliriz. Fonksiyon bir değer döndürmüyorsa, değer döndürmediğini ifade eden 'void' anahtar kelimesini
 * kullanabiliriz.
 */

function printResult(num: number): void {
    console.log("Result: ", num)
}

printResult(add3(12, 8))



/**
 * bir fonksiyonu pointer olarak yani hafızada bulunduğu yeri bir başka değişkenin içine atmak süretiyle de kullanabiliriz.
 */

function add4(n1: number, n2: number): number {
    return n1 + n2
}

let combineValues;
combineValues = add4
console.log(combineValues(8, 8))

/**
 * Yukarıdaki tanımlamada combineValues değişkeninin içerisine fonksiyon atıldığında bir sorun olmasa da
 * combineValues = 5
 * console.log(combineValues(8, 8))
 * şeklinde bir yazımda typescript hata vermeyecektir. Ancak uygulama çalıştırıldığında bir hata ile karşılaşırız.
 * Bu hatanın önüne geçebilmek için değişkeni aşağıdaki örnekte görüebileceği gibi ön tanımlı olarak tanımlamamız gerekir.
 */

function add5(n1: number, n2: number): number {
    return n1 + n2
}

let combineValues1: Function;
combineValues1 = add5
combineValues1 = 5; // Bu şekildeki bir yazım sonucunda typescript değişkenin sadece fonksiyon tipinde bir değer alabileceğini hatırlatıyor.
console.log(combineValues1(8, 8))

/**
 * Yukarıdaki çözüm güzel ama mükemmel değil. Hala bazı problemlerle karşı karşıya kalabiliriz.
 * combineValues1 değişkeninin bir fonksiyon alması gerektiğini yukarıda tanımladık. Ancak konsola yazdırmaya çalıştığımız satırda
 * fonksiyonun 2 adet parametre aldığı görülmektedir. Eğer combineValues1 değişkenine parametre almayan bir fonksiyon ataması yaparsak
 * typescript bir hata vermeyecektir ancak uygulama derlendikten sonra istenmeyen sonuçla karşılaşacağız.
 */

let combineValues2: Function;
combineValues2 = printResult
console.log(combineValues2(8, 8))

/**
 * Tüm bu olası sorunların peşinen önüne geçebilmek için, fonksiyon tiplerini devreye sokmamız gerekiyor.
 * Fonksiyon tipleri, döndürdüğü değerin tipine ve aldığı parametrelerin tipine göre değişen fonksiyonlardır.
 * Fonksiyon tipleri 
 * () => 'fonksiyonun döndüreceği değişken tipi'
 * şeklinde tanımlanır.
 * 
 */


let combiner: () => number

/**
 * yukarıdaki tanımlamada combiner değerinin bir değişken olduğu ve değer olarak da bir fonksiyon alabileceği
 * bu fonksiyonun da herhangi bir parametre almadığı ve number tipinde bir değer döndürebileceği bilgisi ön tanımlı yapılmıştır.
 */

function add6(n1: number, n2: number): number {
    return n1 + n2
}

function printResult1(num: number): void {
    console.log("Result: ", num)
}

let newCombiner: (a: number, b: number) => number

newCombiner = add6
newCombiner = printResult1 // typescript tanımlanan değişkene göre atanan değerin uygun olmadığını bize söylüyor.


/**
 * Bir fonksiyona bir başka fonksiyonu parametre olarak gönderme
 * Aşağıdaki örnekte addAndHandle fonksiyonun 3 adet parametre aldığı
 * bunlardan ikisinin number tipinde birer değişken olduğu ve sonuncu parametrenin de
 * number tipinde bir parametre alan ve sonuç olarak da herhangi bir değer döndürmeyen
 * bir fonksiyon olduğu görülmektedir.
 */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

// 3. parametre anonymous fonksiyon olarak geçilmiş.

addAndHandle(10, 20, (res) => {
    console.log("result: ", res)
})
