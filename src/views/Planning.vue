<template>
    <div class="page-title">
                <h3>Планирование</h3>
              </div>

              <section>
                <div v-for="category of categories" v-bind:key="category.id">
                  <div v-if="category.spent > 0">
                  <p>
                    <strong>{{ category.nameCategory }}</strong>
                    (Заработано: {{ category.spent }}₽)
                  </p>
                  <div class="progress">
                    <div class="determinate green" style="width: 100%"></div>
                  </div>
                  </div>
                  <div v-else>
                  <p>
                    <strong>{{ category.nameCategory }}</strong>
                    (Потрачено: {{ Math.abs(category.spent) }}₽ из {{category.limit}}₽)
                  </p>
                  <div class="progress">
                    <div class="determinate red" v-bind:style="{width: percentOfWidth(Math.abs(category.spent), category.limit)+'%'}"></div>
                  </div>
                  </div>
                </div>
              </section>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
      percentOfWidth(a, b) {
        return (a/b) * 100
      }
    },
    computed: {
      categories() {
        return this.$store.getters.categories
      },
      
    }

}
</script>