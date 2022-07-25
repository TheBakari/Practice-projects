class Validator {
  constructor(config) {
    this.elementsConfig = config;
    this.erros = {};

    this.generateErrosObject();
    this.inputListener();
  }

  generateErrosObject() {
    for (let field in this.elementsConfig) {
      this.erros[field] = [];
    }
  }
  inputListener() {
    let inputSelector = this.elementsConfig;
    for (let field in inputSelector) {
      let el = document.querySelector(`input[name="${field}"]`);
      el.addEventListener("input", this.validate.bind(this));
    }
  }

  validate(e) {
    let elFileds = this.elementsConfig;
    let field = e.target;

    let fieldName = field.getAttribute("name");
    let fieldValue = field.value;

    this.erros[fieldName] = [];

    if (elFileds[fieldName].required) {
      if (fieldValue === "") {
        this.erros[fieldName].push("Polje je prazno");
      }
    }
    if (elFileds[fieldName].email) {
      if (!this.validateEmail(fieldValue)) {
        this.erros[fieldName].push("Nispravna email adresa");
      }
    }
    if (
      fieldValue.length < elFileds[fieldName].minLength ||
      fieldValue.length > elFileds[fieldName].maxLength
    ) {
      this.erros[fieldName].push(
        `Polje mora imati minimalno ${
          elFileds[fieldName.minLength]
        } i maksimalno ${elFileds[fieldName].maxLength} Karaktera`
      );
    }
    if (elFileds[fieldName].matching) {
      let matchingEl = document.querySelector(
        `input[name= "${elFileds[fieldName].matching}"]`
      );

      if (fieldValue !== matchingEl.value) {
        this.erros[fieldName].push("lozinke se ne poklapaju");
      }
      if (this.erros[fieldName].length === 0) {
        this.erros[fieldName] = [];
        this.erros[elFileds[fieldName].matching] = [];
      }
    }
    this.populateErrors(this.erros);
  }
  populateErrors(errors) {
    for (const elem of document.querySelectorAll("ul")) {
      elem.remove();
    }
    for (let key of Object.keys(errors)) {
      let parentElement = document.querySelector(
        `input[name="${key}"]`
      ).parentElement;
      let errorsElement = document.createElement("ul");
      parentElement.appendChild(errorsElement);

      errors[key].forEach((error) => {
        let li = document.createElement("li");
        li.innerText = error;

        errorsElement.appendChild(li);
      });
    }
  }
  validateEmail(email) {
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
}
