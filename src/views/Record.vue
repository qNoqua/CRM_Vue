<template>
  <div class="page-title">
    <h3>Новая запись</h3>
  </div>
  <form class="form">
    <label>Выберите категорию</label>
    <div class="input-field">
      <select required>
        <option>name cat</option>
      </select>
    </div>
    <p>
      <label>
        <input
          class="with-gap"
          name="type"
          type="radio"
          v-model="typeOfCheck"
          value="income"
        />
        <span>Доход</span>
      </label>
    </p>
    <p>
      <label>
        <input
          class="with-gap"
          name="type"
          type="radio"
          v-model="typeOfCheck"
          value="outcome"
        />
        <span>Расход</span>
      </label>
    </p>

    <div class="input-field">
      <input
        id="amount"
        type="number"
        min="0"
        max="10000000"
        v-model="sumOfCheck"
      />
      <label for="amount">Сумма</label>
      <span class="helper-text validate">Введите сумму операции</span>
    </div>

    <div class="input-field">
      <input id="description" type="text" v-model="description" />
      <label for="description">Описание</label>
      <span  class="helper-text validate"
        >Добавьте описание расхода</span
      >
    </div>

    <button
      class="btn waves-effect waves-light"
      type="submit"
      v-on:click.prevent="createCheck"
      v-bind:disabled="isButtonDisabled"
    >
      Создать
      <i class="material-icons right">send</i>
    </button>
  </form>
</template>

<script>
import * as dayjs from "dayjs";
export default {
  data() {
    return {
      newCheck: {},
      typeOfCheck: "",
      sumOfCheck: "",
      description: "",
    };
  },
  methods: {
    createCheck() {
      const newCheck = {
        id: Date.now(),
        date: dayjs().format("DD.MM.YYYY"),
        time: dayjs().format("HH.mm"),
        typeOfCheck: this.typeOfCheck,
        sumOfCheck: this.sumOfCheck,
        description: this.description,
      };
      console.log(this.$store.getters.history)
      console.log(newCheck);  
      this.$store.commit('pushToHistory', newCheck)
      console.log(this.$store.getters.history)
      this.$router.push("/history");
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.typeOfCheck !== "" && this.sumOfCheck !== "" && this.description !== "") return false;
      return true;
    },
  },
};
</script>
