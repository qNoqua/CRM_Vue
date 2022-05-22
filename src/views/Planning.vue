<template>
    <div class="page-title">
                <h3>Планирование</h3>
                <h4>12 212</h4>
              </div>

              <section>
                <div v-for="category of categories" v-bind:key="category.id">
                  <p>
                    <strong>{{ category.nameCategory }}</strong>
                    12 122 из 14 0000
                  </p>
                  <div class="progress">
                    <div class="determinate green" style="width: 40%"></div>
                  </div>
                </div>
              </section>
</template>
<script>
export default {
    computed: {
      categories() {
        return this.$store.getters.categories
      },
      
    }

}
</script>