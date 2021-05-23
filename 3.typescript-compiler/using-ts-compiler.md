### Watch mode

Typescript dosyalarında herhangi bir değişiklik yapıldıktan sonra yeniden derlenmesi için
`tsc index.ts` komutunun çalıştırılması gerekir. 

Değişikliğin browser'a yansıması için her seferinde compilerı çalıştırmamak için watch mode özelliği kullanılabilir.

`tsc index.ts --watch` === `tsc index.ts -w` 

Proje root dosyasında 1'den fazla ts dosyası varsa ve hepsinin aynı anda compile edilmesi gerekiyorsa ne yapmalıyız?
Öncelikle tsconfig.json dosyasının oluşması için `tsc --init` komutunu çalıştırıyoruz
Sonrasında terminale `tsc` yazarak root'da bulunan tüm ts dosyalarının compile edilmesini sağlayabiliriz.

Yine aynı şekilde `tsc --watch` yada `tsc -w` komutunu yazarak tüm dosyalardaki değişiklikleri komut satırını bir daha kullanmadan tekrar 
compile edilmesini sağlayabiliriz


`tsconfig.json` dosyası compile işleminde yapılacak değişikliklerin neler olduğunu tanımlayabileceğimiz bir konfigürasyon dosyasıdır.

```js
"exclude": [
    "analytics.ts",
    "node_modules"
]

```

compilera analytics.ts dosyasının compile işlemine tabi tutulmayacağını söylüyoruz.