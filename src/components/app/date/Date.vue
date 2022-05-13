<template>
        <span class="black-text"
          >Дата: {{ date }}
        </span>
</template>
<script>
import * as dayjs from 'dayjs'
export default {
      data () {
        return {
          date: dayjs().format('DD.MM.YYYY')
        }
      }
}
</script>
<style scoped>
.black-text {
  padding-left: 10px;
}
</style>