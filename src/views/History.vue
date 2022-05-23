<template>
  <div class="page-title">
    <h3>История записей</h3>
  </div>
    <div class="nav-wrapper">
        <div class="input-field">
          <input id="search" type="search" v-model="search" placeholder="Найти">
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
    </div>
    
  <section>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Сумма</th>
          <th>Дата и время</th>
          <th>Категория</th>
          <th>Тип</th>
          <th>Подробнее</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in getHistoryByCategoryId" v-bind:key="item.id">
          <td> {{index + 1}} </td>
          <td> {{item.sumOfCheck}}</td>
          <td> {{item.date}} : {{item.time}} </td>
          <td> {{item.nameParentCategory }} </td>
          <td>
            <span v-if="item.typeOfCheck === 'outcome'" class="white-text badge red">Расход</span>
            <span v-else class="white-text badge green">Доход</span>
          </td>
          <td>
            <button class="btn-small btn tooltipped" v-tooltip="item.description">
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
        search: null,
        instances: null,
      }
    },
    methods: {
    },
    computed: {
      getHistoryByCategoryId() {
        return this.$store.getters.getHistoryByCategoryId(this.search)
      },
    },
    mounted() {

    }
    
}
</script>