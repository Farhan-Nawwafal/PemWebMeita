/* 
=> format pembuatan variable di js :
keywordVar namaVariabel = value;
Note : tanda "=" ini berarti memberi (assign) value kepada variabel

=> Arti "Deklarasi, Inisialisasi serta Deklarasi dan Inisialisasi"
1. Deklarasi : Menetapkan keywordVar, nama variable tanpa memberi value.
    Contoh : let test;
2. Inisialisasi : Memberi nilai terhadap variable yang telah dideklarasi.
    Contoh : test = "Halo"; 
    Note : Ketika variabel sudah dideklarasi, saat ingin menginisialisasi, ga perlu tulis
           keyword var lagi di sebelah kiri "test" (nama variabel).
3. Deklarasi dan Inisialisasi : Menetapkan keywordVar, nama variable dan memberi value sekaligus
    Contoh : let test1 = "Helo";

=> Di JavaScript keywordVar punya 3 jenis :
1. var
2. let --> lebih disarankan daripada var.
3. const --> konstanta.

=> Karakteristik jenis keywordVar :
1. let :
    a. Bisa mengubah suatu value dari value yang sebelumnya telah ditetapkan
       (lihat contoh 1.1 dan contoh 1.2)
    b. Ga bisa mendeklarasi nama variable yang sama dengan keyword let. (lihat contoh 1.3).
    c. Bisa melakukan deklarasi, inisialisasi atau deklarasi dan inisialisasi (bisa dipisah).

2. const :
    a. Tidak bisa mengubah value dari value sebelumnya yang telah ditetapkan.
       (lihat contoh 1.4).
    b. Ga bisa mendeklarasi nama variable yang sama dengan keyword const. (lihat contoh 1.5).
    c. Hanya bisa melakukan deklarasi dan inisialisasi (digabung)

=> Tambahan :
Tanda (+) akan berperilaku sebagai "Operator Concatenation" ketika dia diapit oleh 2 string.
Contoh : "Hello" + "World" --> Ini bukan operator (+) tanda tambah, tapi concatenation.

Note : Concatenation = menggabungkan 2 string jadi 1 (lihat contoh 1.6).
*/

//-------------------KEYWORD LET-------------------//
// contoh 1.1 : menetepkan value dari variabel nama.
let nama = "lily"; 
console.log(nama);
document.write(nama);

// contoh 1.2 : mengubah value dari variabel nama yg sudah ditetapkan sebelumnya.
nama = "sakura"; 

// contoh 1.3 : error, variabel nama sudah dideklarasikan.
// let nama = "hai" 

//-------------------KEYWORD CONST-------------------//
const bunga = "tulip";
console.log(bunga);
// contoh 1.4 : error, ga bisa mengubah value variabel konstanta.
// bunga = "lily"; 

// contoh 1.5 : error, ga bisa deklarasi nama variable yang sama.
// const bunga = "halo" 

//-------------------TAMBAHAN-------------------//
// operator concatenation (+)
let namaAwal = "Hello";
let namaAkhir = "World";
// contoh 1.6 : Gabungkan 2 string jadi 1.
console.log(namaAwal + " " + namaAkhir); 
// kode (+ " " +) itu artinya membuat spasi agar hasilnya menjadi Hello World
console.log("test");