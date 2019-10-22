var tanggal = 21;
var bulan = 9;
var tahun = 1996;

if (tanggal < 1 || tanggal > 31 || !Number.isInteger(tanggal)){
    console.log('Format tanggal salah');
} else if (bulan < 1 || bulan > 12 || !Number.isInteger(bulan)){
    console.log('Format bulan salah');
} else if (tahun < 1900 || tahun > 2200 || !Number.isInteger(tahun)){
    console.log('Format tahun salah');
} else {
    switch (bulan){
        case 1:
            bulan = 'Januari';
            break;
        case 2:
            bulan = 'Februari';
            break;
        case 3:
            bulan = 'Maret';
            break;
        case 4:
            bulan = 'April';
            break;   
        case 5:
            bulan = 'Mei';
            break;
        case 6:
            bulan = 'Juni';
            break;
        case 7:
            bulan = 'Juli';
            break;
        case 8:
            bulan = 'Agustus';
            break;
        case 9:
            bulan = 'September';
            break;
        case 10:
            bulan = 'Oktober';
            break;
        case 11:
            bulan = 'November';
            break;
        case 12:
            bulan = 'Desember';
            break;
        default:
            console.log('Format bulan salah');
            break;
    } console.log(`${tanggal} ${bulan} ${tahun}`);
}