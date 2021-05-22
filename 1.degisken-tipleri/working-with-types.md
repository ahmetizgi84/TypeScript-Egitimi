# Değişken Tipleri 

### 1. number
integer, float gibi değişken tipleri, aralarında herhangi bir fark olmadan `number` tipidir.
`1`, `5.3`, `-19` => `number` tipi

### 2. string
Tüm text değerleri birer string olarak kabul edilir. 
`'Merhaba'`, `"Selam"`, Tek tırnak, çift tırnak ve backtick işareti `` arasında yazılan her text bir string olarak kabul edilir. 

### 3. boolean
Doğru mu? yanlış mı?, var mı? yok mu? evet, hayır gibi seçimleri tutan değişken türüdür.
`true` `false`

Eğer tanımlanan değişkene tanımlandığı anda ilk değer verirsek typescript verdiğimiz değere göre değişkenin tipini anlayabilir. 
`const number1 = 5` veya `let number2 = 10` gibi. Bu aşamada ilk değer verildiği için o değişkenin tipini belirtmek iyi bir pratik olmayabilir.
`let number2: number = 10` -> bu şekilde kullanmak pratik değil.
Şayet değişkeni tanımlayacağız ancak ilk değer vermeyeceksek o zaman değişkenin tipini belirlemeliyiz. Aksi halde typescript
tanımlanan değişkenin tipini bilemez. `let number2: number`

```js

const number1 = 5;
let number2 = 10;
let number3: number;

```

### 4. object
Herhangi bir javascript objesi. 
`{age: 30}`