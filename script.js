main = (email) => {
    if (/\S+@\S+\.\S+/.test(email) == true ) {
        console.log("Berisi alamat surel");
    }else{
        console.log("Tidak berisi alamat surel");
    }
}

main('loroyangtau@gmail.com');