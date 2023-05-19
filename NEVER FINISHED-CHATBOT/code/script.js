//WARIANT 1

// let lapacz = 0;
//ANSW 1
let wybory = "";
let odp = ["nie rozumiem", "Cześć", "rozumiem", "Aha. Znasz to:", "Anime Speed Up Song", "Ekstra."];
let mojeansw = ["Cześć", "Siema", "Hejka❤", "Idę na trening", "Słucham muzyki", "Anime piosenki", "Rap", "Jazz"];
let pytzwrot = ["Co robisz?", "co trenujesz?", "co słuchasz?","Mów mi TAJGER","Nienawidzisz Ukraińców?"];
let lapacz = 0;

function wiadomosc() {
    let pyt = odpowiedz;
    // console.log(pyt);
    // W odpowiedzi.js zrobic ze jesli ANSW1 = np. "cześć"
    // let marucha = odp1
    // I pyt = marucha;
    // let pyt = document.getElementById("wiad").value;
    // let pytanie = document.getElementById("czat").innerHTML = (">" + pyt);
    const para = document.createElement("div");
    para.id = "pytanko";
    para.innerHTML = pyt;
    document.getElementById("czat").appendChild(para);
    lapacz++;
    //LAPACZ
    if (lapacz == 1) {
        document.getElementById("w11").style.display = "none";
        document.getElementById(`w12`).style.display = "block";
    }
    if (lapacz == 2 && pyt == mojeansw[0] || lapacz == 2 && pyt == mojeansw[1] || lapacz == 2 && pyt == mojeansw[2]) {
        alert("NIE WYBRANO ŻADNEJ OPCJI");
        lapacz = 1;
    }
    //WYBOR 1
    if (lapacz == 2 && wybory == "muzyka") {
        console.log("BENGEREK");
        document.getElementById("w12").style.display = "none";
        document.getElementById("w131").style.display = "block";
    }
    if (lapacz == 2 && wybory == "trening") {
        console.log("TREJNING");
        document.getElementById("w12").style.display = "none";
        document.getElementById("w132").style.display = "block";
    }
    if (pyt == mojeansw[6] || pyt == mojeansw[7]) {
        alert("Chyba jednak lubisz coś innego 😎");
        lapacz = 2;
    }
    if (lapacz == 3 && wybory == "znaszto") {
        console.log("ZNASZ TO!");
        document.getElementById("w131").style.display = "none";
        document.getElementById("TAKNIESPADAJ1").style.display = "block";
    }
  //TAK I NIE 1 ODPOWIEDZI
      if (wybory == "tak1" || wybory == "nie1") {
        console.log("OF COURSE");
        document.getElementById("TAKNIESPADAJ1").style.display = "none";
        document.getElementById("ODPDLATAKNIE1").style.display = "block";
    }
  //CALL ME TIGER
        if (wybory == "OK1") {
        console.log("OK INTERESTED");
        document.getElementById("ODPDLATAKNIE1").style.display = "none";
        document.getElementById("TAKCOLIBE1").style.display = "block";
    }
    if (wybory == "XDD1" || wybory =="WTF1") {
        console.log("HEJTING BRO?😥");
        document.getElementById("ODPDLATAKNIE1").style.display = "none";
        document.getElementById("TAKCOLIBE1").style.display = "block";
    }

    //WYBOR 2 OD MUZYKI

    //ENTER
    document.getElementById("cont").style.display = "none";
    wiadomoscbutton = setInterval(function() {
        document.getElementById("cont").style.display = "block";
        clearInterval(wiadomoscbutton)
    }, 1500);



    //ODOPOWIEDZI
    //ODP NA PYT 1;
    if (pyt == mojeansw[0] || pyt == mojeansw[1] || pyt == mojeansw[2]) {
        const answ = document.createElement("div");
        answ.id = "odpowiedz";
        answ.textContent = odp[1];

        const backansw = document.createElement("div");
        backansw.id = "odpowiedz";
        backansw.textContent = pytzwrot[0];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(answ);
            clearInterval(interwal);
        }, 1000);
        interwal2 = setInterval(function() {
            document.getElementById("czat").appendChild(backansw);
            clearInterval(interwal2);
        }, 1500);
    }
    //ODP NA PYT 2
    else if (pyt == mojeansw[3]) {
        //IDE NA TRENING
        const answ = document.createElement("div");
        answ.id = "odpowiedz";
        answ.textContent = odp[2];

        const backansw = document.createElement("div");
        backansw.id = "odpowiedz";
        backansw.textContent = pytzwrot[1];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(answ);
            clearInterval(interwal);
        }, 1000);
        interwal2 = setInterval(function() {
            document.getElementById("czat").appendChild(backansw);
            clearInterval(interwal2);
        }, 1500);
    } else if (pyt == mojeansw[4]) {
        //SLUCHAM MUZYKI
        const answ = document.createElement("div");
        answ.id = "odpowiedz";
        answ.textContent = odp[2];

        const backansw = document.createElement("div");
        backansw.id = "odpowiedz";
        backansw.textContent = pytzwrot[2];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(answ);
            clearInterval(interwal);
        }, 1000);
        interwal2 = setInterval(function() {
            document.getElementById("czat").appendChild(backansw);
            clearInterval(interwal2);
        }, 1500);
    }
    //ODP NA PYT 3
    //JESLI ODPOWIEDZ TO JAZZ ALBO RAP
    else if (wybory == "rapjezz") {
        const answ = document.createElement("div");
        answ.id = "odpowiedz";
        answ.textContent = odp[2];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(answ);
            clearInterval(interwal);
        }, 1000);
        //TYLKO JEDNO PYTANIE JAK SIE NAZYWASZ --> MOWIĄ MI TYGRYS; i przejscie dalej do ZNASZ TO?
    }
    //JESLI ODPOWIEDZ TO ANIME (znasz to?)
    else if (wybory == "znaszto") {
        const answ = document.createElement("div");
        answ.id = "odpowiedz";
        answ.textContent = odp[3];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(answ);
            clearInterval(interwal);
        }, 1000);
        const linker = document.createElement("a");
        linker.setAttribute(
            'href',
            'https://www.youtube.com/watch?v=6oKUteK4ymk&ab_channel=BestNightcore',
        );
        linker.setAttribute(
            'target',
            '_blank'
        );
        linker.id = "odpowiedzlink";
        linker.textContent = odp[4];
        interwal2 = setInterval(function() {
            document.getElementById("czat").appendChild(linker);
            clearInterval(interwal2);
        }, 1500);
        const imgg = document.createElement("img");
        imgg.id = "odpowiedzimg";
        interwal3 = setInterval(function() {
            document.getElementById("czat").appendChild(imgg);
            document.getElementById("odpowiedzimg").src = "imgs/znaszto.jpg";
            clearInterval(interwal3);
        }, 2000);
    }
  //TAK NIE SPADAJ 1
    else if (wybory == "tak1" || wybory == "nie1") {
            const answ = document.createElement("div");
            answ.id = "odpowiedz";
            answ.textContent = odp[5];
            interwal = setInterval(function() {
                document.getElementById("czat").appendChild(answ);
                clearInterval(interwal);
            }, 1000);
    const backansw = document.createElement("div");
        backansw.id = "odpowiedz";
        backansw.textContent = pytzwrot[3];
      //NIG ==> TYGRYS
        interwal2 = setInterval(function() {
            document.getElementById("czat").appendChild(backansw);
            clearInterval(interwal2);
        }, 1500);
        }
  //XDD I WTF (HATEING UKRAINCE?)
      else if (wybory == "XDD1" || wybory == "WTF1") {
    const backansw = document.createElement("div");
        backansw.id = "odpowiedz";
        backansw.textContent = pytzwrot[4];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(backansw);
            clearInterval(interwal);
        }, 1000);
        }
  //KONIEC
    //ODP NA PYT 4
    else {
        const answ = document.createElement("div");
        answ.id = "odpowiedz";
        answ.innerHTML = odp[0];
        interwal = setInterval(function() {
            document.getElementById("czat").appendChild(answ);
            clearInterval(interwal);
        }, 1000);
    }
}

function startapp() {
    document.getElementById("wypisywanie").style.display = "block";
    document.getElementById("startmenu").style.display = "none";
    document.getElementById("phone").style.backgroundImage = "url(imgs/phone_meszrenger.png)";
}