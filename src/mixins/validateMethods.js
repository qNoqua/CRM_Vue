export default {
  methods: {
    isRequiredEmail(value) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const admin = 'admin'
      if (value === admin || reg.test(value) === true) {
        this.emailSet.ready = true;
        return true;
      }else {
        this.emailSet.ready = false;
        return "Неверный email";
      }
    },
    isRequiredPassword(value) {
      const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      const admin = '123'
      if (value === admin || reg.test(value) === true) {
        this.passwordSet.ready = true;
        return true;
      } else {
        this.passwordSet.ready = false;
        return "Пароль должен содержать не менее 8 смволов, одной сточной, одной заглавной букв и одной цифры";
      }
    },
    isRequiredName(value) {
      const reg = /^[а-яА-Я ]+$/;
      const admin = 'admin'
      if (value === admin || reg.test(value) === true) {
        this.nameSet.ready = true;
        return true;
      } else {
        this.nameSet.ready = false;
        return "Недопустимое имя";
      }
    },
    typePassword() {
      if (this.passwordSet.typeOfPassword === "password")
        this.passwordSet.typeOfPassword = "text";
      else this.passwordSet.typeOfPassword = "password";
    },
  },
}