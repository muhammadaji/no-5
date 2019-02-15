main = (email) => {
    if (/\S+@\S+\.\S+/.test(email) == true ) {
        console.log("Berisi alamat surel");
    }else{
        console.log("Tidak berisi alamat surel");
    }
}

main('kdjas6242@gmail.com');
main('makan bakso');
main('Hubungin asgfugiyg6642@gmail.com');
