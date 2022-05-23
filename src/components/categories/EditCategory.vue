<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form>
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

        <div class="input-field">
          <input type="text" id="nameEdit" v-model="newName" />
          <label for="nameEdit">Название</label>
          <span class="helper-text validate">Введите новое название</span>
        </div>
        <div class="input-field">
          <input
            id="limit"
            type="number"
            min="0"
            max="10000000"
            v-model="newLimit"
          />
          <label for="limit">Лимит</label>
          <span class="helper-text validate"
            >Задайте, чтобы обновить лимит</span
          >
        </div>
        <div class="button-field">
          <button
            class="btn-small waves-effect waves-light"
            v-bind:disabled="isButtonDisabled"
            type="submit"
            v-on:click.prevent="editCategory"
          >
            Обновить
            <i class="material-icons right">send</i>
          </button>
          <button
            class="btn-small waves-effect waves-light"
            type="submit"
            v-on:click="removeCategory"
          >
            Удалить
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  /*global M*/
  data() {
    return {
      categories: this.$store.getters.categories,
      selectedCategoryId: null,
      newName: "",
      newLimit: "",
      select: null,
    };
  },
  methods: {
    editCategory() {
      this.$store.commit("editCategory", {
        id: Number(this.$refs.select.value),
        nameCategory: this.newName,
        limit: this.newLimit,
      });
    },
    removeCategory() {
      this.$store.commit("removeCategory", {
        id: Number(this.$refs.select.value),
        nameCategory: this.newName,
        limit: this.newLimit,
      });
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.newName !== "" || this.newLimit > 0) return false;
      return true;
    },
  },
  created() {
    if (this.categories.length > 0) {
      const { id } = this.categories[0];
      this.selectedCategoryId = id;
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
