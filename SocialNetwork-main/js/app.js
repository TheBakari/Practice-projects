document.querySelector("#registracija").addEventListener("click", () => {
  document.querySelector(".custom-modal").style.display = "block";
});

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector(".custom-modal").style.display = "none";
});

let config = {
  korisnicko_ime: {
    required: true,
    minlength: 5,
    maxlength: 50,
  },

  kregister_email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },

  register_lozinke: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "ponovi_lozniku",
  },

  ponovi_lozniku: {
    required: true,
    minlength: 5,
    maxlength: 50,
    matching: "register_lozinke",
  },
};

let validator = new Validator(config, "#registrationForm");
