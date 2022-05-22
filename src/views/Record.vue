<template>
  <div class="page-title">
    <h3>Новая запись</h3>
  </div>
  <form class="form">
    <div class="input-field">
      <select ref="select" v-model="selectedCategoryId">
        <option
          v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.id"
        >
          {{ category.nameCategory }}
        </option>
      </select>
      <label>Выберите категорию</label>
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
      <span class="helper-text validate">Добавьте описание расхода</span>
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
  /*global M*/
  data() {
    return {
      newCheck: {},
      typeOfCheck: "",
      sumOfCheck: "",
      description: "",
      select: null,
      selectedCategoryId: null,
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
        categoryId: Number(this.$refs.select.value),
        nameParentCategory: this.getCategoriesName[0].nameCategory,
      };
      console.log(this.select);
      console.log(newCheck);
      this.$store.commit("pushToHistory", newCheck);
      this.$router.push("/history");
    },
  },
  computed: {
    isButtonDisabled() {
      if (
        this.typeOfCheck !== "" &&
        this.sumOfCheck !== "" &&
        this.description !== "" &&
        this.select !== null
      )
        return false;
      return true;
    },
    categories() {
      return this.$store.getters.categories;
    },
    getCategoriesName() {
      return this.$store.getters.getCategoriesName(Number(this.selectedCategoryId))
    }
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
  },
  beforeUnmount() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>
