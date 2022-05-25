<template>
  <div class="page-title">
    <h3>Счет</h3>
  </div>
  <div class="row">
    <user-balance/>
    <exchange-rates/>
  </div>
</template>

<script>
import ExchangeRates from "@/components/homepage/ExchangeRates";
import UserBalance from "@/components/homepage/UserBalance";
export default {
  name: "Home",
  data () {
    return {
    }
  },
  components: {
    ExchangeRates,
    UserBalance,
  },
};
</script>
