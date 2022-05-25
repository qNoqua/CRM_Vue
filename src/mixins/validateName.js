export default {
    methods: {
      isRequiredName(value) {
        const reg = /^[а-яА-Я ]+$/;
        if (reg.test(value) === true) return true;
          return false
      },
    },
  }