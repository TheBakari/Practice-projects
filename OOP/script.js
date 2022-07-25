// const Osoba = {
//   first_name: "Niko",
//   last_name: "Nikolic",
//   phone: "21321312",
//   getNameAndPhone: function () {
//     console.log(`${this.first_name} - ${this.phone}`);
//   },
// };
// Osoba.getNameAndPhone();

// function Osoba(first_name, last_name, phone) {
//   this.first_name = first_name;
//   this.last_name = last_name;
//   this.phone = phone;

//   this.getNameAndPhone = function () {
//     console.log(`${first_name} - ${phone}`);
//   };
// }
// let osoba1 = new Osoba("niko", "Nikolic", "11231");
// let osoba2 = new Osoba("Ivan", "Markovic", "11111");

// osoba1.getNameAndPhone();
// osoba2.getNameAndPhone();

// const Osoba = {
//   first_name: "Name",
//   getNameAndPhone: function () {
//     console.log(`${this.first_name} - ${this.phone}`);
//   },
// };

// let niko = Object.create(Osoba);

// niko.phone = "1234123";
// niko.getNameAndPhone();

// let ivan = Object.create(Osoba);

// ivan.phone = "10392";
// ivan.first_name = "Ivan";

// ivan.getNameAndPhone();

class Osoba {
  constructor(first_name, last_name, phone) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }
  getNameAndPhone() {
    console.log(`${this.first_name} - ${this.phone}`);
  }
}

console.log(Osoba);

let osoba1 = new Osoba("niko", "Nikolic", "11231");
let osoba2 = new Osoba("Ivan", "Markovic", "11111");

console.log(osoba1.phone);
console.log(osoba2.first_name);

osoba1.getNameAndPhone();
osoba2.getNameAndPhone();
