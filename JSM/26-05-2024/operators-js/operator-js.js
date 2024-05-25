/*
=> Operator di JS ada banyak jenisnya :
1. Arithmetic :
    -> Operator yang ada di matematika, misal :
    -> (+), (-), (*), (/), (**) [pangkat], (%) [modulus/sisa bagi].
2. Assignment :
    -> Operasi untuk memberi/mengisi nilai ke suatu variabel.
    -> Disimbolkan dengan tanda "=". 
    -> Misal : x = 5, maka mengisi nilai x dengan angka 5.
3. Comparison (Membandingkan) :
    -> Biasanya ini digunakan ketika di dalam kondisi if atau for.
    -> Operasi ini menghasilkan "Boolean Value". Bisa true atau false.
    -> Jenisnya :
        a. == --> Membandingkan data tanpa melihat tipe data.
        b. === --> Membandingkan data sekaligus membandingkan tipe datanya.
        c. != --> Tidak sama dengan (Tanpa melihat apa tipe datanya).
        d. !== --> Tidak sama dengan, namun melihat juga tipe datanya.
        e. (>), (<), (>=), (<=), dan (?) [Ternary operator].
4. Logical :
    -> Operasi yang digunakan untuk menentukan "Boolean Value" dari 2 variabel yg dibandingkan.
    -> Jenis-jenisnya :
        a. && (Dibaca : dan) --> Akan bernilai true jika keduanya true.
        b. || (Dibaca : atau) --> Akan bernilai true jika salah satunya true.
        c. ! (Dibaca : not / invers) --> Membalikkan "Boolean Value". Misal awalnya true --> false. Dan sebaliknya.
*/
//------CONTOH ARITHMETIC OPERATOR START------//
// Operasi (+)
{
    let x = 5;
    let y = 10;
    let z = x + y;
    console.log("Nilai x + y adalah : " + z);
}

// Operasi (-)
{
    let x = 20;
    let y = 10;
    let z = x - y;
    console.log("Nilai a - b adalah : " + z);
}

// Operasi perkalian (*)
{
    let x = 5;
    let y = 4;
    let z = x * y;
    console.log("Nilai a * b adalah : " + z);
}

// Operasi pembagian (/)
{
    let x = 15;
    let y = 3;
    let z = x / y;
    console.log("Nilai x / y adalah : " + z);
}

// Operasi perpangkatan (**);
{
    let x = 6;
    let y = 2;
    let z = x ** y;
    console.log("Nilai x pangkat y adalah : " + z);
}

// Operasi modulus/sisa bagi (%)
{
    let x = 10;
    let y = 3;
    let z = x % y;
    console.log("Nilai x % y adalah : " + z);
}
//------CONTOH ARITHMETIC OPERATOR END------//

//------CONTOH ASSIGNMENT OPERATOR START------//
{
    let x = 5;
    console.log("Maka variabel x diisi oleh angka : " + x);
}
//------CONTOH ASSIGNMENT OPERATOR END------//

//------CONTOH COMPARISON OPERATOR START------//
// Operasi (==)
{
    let x = 6;
    let y = 5;
    let z = (x == y); // dibaca : apakah x sama dengan y ?
    console.log("Apakah x sama dengan y ? : " + z);
}

// Operasi (===)
{
    let x = 7;
    let y = "7";
    let z = (x === y); // dibaca : apakah nilai x dan y sama ? Begitu juga dengan tipe datanya ?
    console.log("Apakah x sama dengan y ? : " + z);
}

// Operasi (!=)
{
    let x = 5;
    let y = 3;
    let z = (x != y); // dibaca : apakah x tidak sama dengan y ?
    console.log("Apakah x tidak sama dengan y ? : " + z);
}

// Operasi (!==)
{
    let x = 6;
    let y = "6";
    let z = (x !== y); // dibaca : apakah nilai x dan y tidak sama ? Begitupun dengan tipe datanya ?
    console.log("Apakah x tidak sama dengan y ? : " + z);
}
//------CONTOH COMPARISON OPERATOR END------//

//------CONTOH LOGICAL OPERATOR START------//
// Operasi && (dan) 
{
    let x = 6;
    let y = 4;
    let z = ( (x > 5) && (y < 5) ) // dibaca : Apakah x > 5 dan y < 4 ?
    console.log("Apakah x > 5 dan y < 5 ? : " + z);
}

// Operasi || (atau)
{
    let x = 10;
    let y = 9;
    let z = ( (x > 12) || (y < 10) ); // dibaca : Apakah x > 12 atau y < 10 ?
    console.log("Apakah x > 12 dan y < 10 ? : " + z);
} 

// Operasi ! (not)
{
    let x = 10;
    let z = (x === 10); // dibaca : apakah nilai x dan tipe datanya sama dengan 10 ?
    console.log("Apakah x sama dengan 10 ? : " + z);
    console.log("Invers dari z adalah : " + !z);
}
//------CONTOH LOGICAL OPERATOR END------//