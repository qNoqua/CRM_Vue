<template>
  <div class="col s12 m6 l4">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Время</th>
            </tr>
          </thead>

          <tbody v-if="quotes">
            <tr>
              <td>1₽</td>
              <td>{{ Math.floor(quotes.data.USDRUB * 100) / 100 }}$</td>
              <td>{{ quotes.date }}</td>
            </tr>
            <tr>
              <td>1₽</td>
              <td>{{ Math.floor(quotes.data.EURRUB * 100) / 100 }}€</td>
              <td>{{ quotes.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: null,
    };
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
  },
  computed: {
    quotes() {
      return this.$store.getters.rates;
    },
  },
};
</script>
