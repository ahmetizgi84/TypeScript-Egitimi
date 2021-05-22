# Değişken Tipleri 

## CORE TYPES

### 1. number
integer, float gibi değişken tipleri, aralarında herhangi bir fark olmadan `number` tipidir.

`1`, `5.3`, `-19` => `number` tipi

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

### 2. string
Tüm text değerleri birer string olarak kabul edilir. 

`'Merhaba'`, `"Selam"` 

Tek tırnak, çift tırnak ve backtick işareti `` arasında yazılan her text bir string olarak kabul edilir. 

### 3. boolean
Doğru mu? yanlış mı?, var mı? yok mu? evet, hayır gibi seçimleri tutan değişken türüdür.

`true` `false`

### 4. object
Herhangi bir javascript objesi. 

`{age: 30}`

### 5. Array
Herhangi bir javascript dizisi, diziler, element tipine bağlı olarak flexible veya strict olabilir. 
`[1,2,3]`

### 6. Tupple
Javascript tarafında olmayıp, typescript ile gelen bir array çeşitidir. Bu dizinin uzunluğu sabittir.

`[1,2]` 

Aşağıdaki örnekte role dizisi tupple olarak tanımlanmıştır. Dizinin uzunluğu sabitken, birinci ve ikinci
indexlerine gelecek olan değişkenlerin tipleri de belirlenmiştir.

```js
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; 
}
```

### 7. Enum
Javascript tarafında olmayıp, typescript ile gelen bir değişken çeşitidir.
Automatically enumerated global constant identifiers - 
Otomatik olarak numaralandırılmış global sabit tanımlayıcılar

`enum {NEW, OLD}`

### 8. Any
Herhangi bir değer anlamına geliyor. Belirli bir tip atanmamış herhangi bir tipte olan değişkenler için kullanılır.
