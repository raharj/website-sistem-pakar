document.getElementById("formJurusan")
.addEventListener("submit", function(e){

    e.preventDefault();

    let mtk = parseInt(document.getElementById("mtk").value);
    let bing = parseInt(document.getElementById("bing").value);
    let teknologi = document.getElementById("teknologi").value;
    let desain = document.getElementById("desain").value;

    let hasil = "";

    // FORWARD CHAINING

    if(mtk >= 80 && teknologi == "ya"){
        hasil = "Rekomendasi Jurusan: TKJ / RPL";
    }

    else if(desain == "ya"){
        hasil = "Rekomendasi Jurusan: DKV";
    }

    else if(bing >= 80){
        hasil = "Rekomendasi Jurusan: Perhotelan";
    }

    else{
        hasil = "Rekomendasi Jurusan: Manajemen Perkantoran";
    }

    document.getElementById("hasil").innerHTML = `
        <div class="hasil-box">
            <h2>${hasil}</h2>
        </div>
    `;
});