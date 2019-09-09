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

place1.textContent = blackKnight.name + ", " + blackKnight.price;
place2.textContent = sylvana.name + ", " + sylvana.price;
place3.textContent = skeeve.name + ", " + skeeve.price;
place4.textContent = grom.name + ", " + grom.price;
place5.textContent = jaina.name + ", " + jaina.price;