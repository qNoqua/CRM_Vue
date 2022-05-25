export default {
    methods: {
      isRequiredBalance(value) {
        const reg = /^\d+$/;
        if (reg.test(value) === true) return true;
          return false
      },
    },
  }