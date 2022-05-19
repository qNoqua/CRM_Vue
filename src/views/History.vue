<template>
  <div class="page-title">
    <h3>История записей</h3>
  </div>
  <!-- <div class="history-chart">
    <canvas></canvas>
  </div> -->
  <section>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Сумма</th>
          <th>Дата и время</th>
          <th>Категория</th>
          <th>Тип</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in history" v-bind:key="item.id">
          <td> {{index + 1}} </td>
          <td> {{item.sumOfCheck}}</td>
          <td> {{item.date}} : {{item.time}} </td>
          <td> {{item.description }} </td>
          <td>
            <span v-if="item.typeOfCheck === 'outcome'" class="white-text badge red">Расход</span>
            <span v-else class="white-text badge green">Доход</span>
          </td>
          <td>
            <button class="btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>


<script>
export default {
    data() {
      return {
        history: []
      }
    },
    methods: {
    },
    mounted() {
      this.history = this.$store.getters.history
    }
    
}
</script>