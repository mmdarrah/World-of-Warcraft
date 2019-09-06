function Figurine(name, price) {
    this.name = name;
    this.price = price;
}

let blackKnight = new Figurine("Black Knight", 275);
let sylvana = new Figurine("Sylvanas Windrunner", 250);
let grom = new Figurine("Grom Hellscream", 265);
let skeeve = new Figurine("Skeeve Sorrowblade", 240);
let jaina = new Figurine("Jaina Proudmoore", 300);

let place1 = document.getElementById("knight");
let place2 = document.getElementById("sylvie");
let place3 = document.getElementById("skeeve");
let place4 = document.getElementById("grom");
let place5 = document.getElementById("jaina");

place1.innerHTML = blackKnight.name + ", " + blackKnight.price;
place2.innerHTML = sylvana.name + ", " + sylvana.price;
place3.innerHTML = skeeve.name + ", " + skeeve.price;
place4.innerHTML = grom.name + ", " + grom.price;
place5.innerHTML = jaina.name + ", " + jaina.price;