function opsBagi(x) {
    let angka = 37;

    let hasilBagi = angka / x;
    console.log(hasilBagi);

    // ceil:
    console.log(`ceil: ${Math.ceil(hasilBagi)}`);

    // floor:
    console.log(`floor: ${Math.floor(hasilBagi)}`);

    // round:
    console.log(`round: ${Math.round(hasilBagi)}`);
}

tanggalLahir = 13;
opsBagi(tanggalLahir);