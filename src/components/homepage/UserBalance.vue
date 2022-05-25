<template>
    <div class="col s12 m6 l4">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Счет в валюте</span>
          <p class="currency-line">
            <span v-if="user">{{ user.balance }}₽</span>
            <span v-else>...</span>
          </p>
          <p class="currency-line">
            <span v-if="user">{{ Math.floor((user.balance / usd)* 100) / 100 }}$</span>
            <span v-else>...</span>
          </p>
          <p class="currency-line">
            <span v-if="user">{{ Math.floor((user.balance / eur)* 100) / 100 }}€</span>
            <span v-else>...</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    usd() {
      return this.$store.getters.rates.data.USDRUB;
    },
    eur() {
      
      return this.$store.getters.rates.data.EURRUB;
    },
  },
};
</script>
