let config = {
  ime_prezime: {
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  korisnicko_ime: {
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    required: true,
    email: true,
    minLength: 5,
    maxLength: 50,
  },
  broj_telefona: {
    minLength: 9,
    maxLength: 13,
  },
  lozinka: {
    minLength: 7,
    maxLength: 25,
    matching: "ponovi_lozinku",
  },
  ponovi_lozinku: {
    required: true,
    minLength: 7,
    maxLength: 25,
    matching: "lozinka",
  },
};

console.log(config);

let validator = new Validator(config);
