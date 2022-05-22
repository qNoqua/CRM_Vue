<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form>
        <div class="input-field">
          <input id="nameCreate" type="text" v-model="nameCategory" />
          <label for="nameCreate">Название</label>
          <span v-if="nameCategory.length === 0" class="helper-text validate"
            >Введите название категории</span
          >
          <span
            v-else-if="createMessage === 'Такая категория уже существует'"
            class="helper-text invalid"
            >{{ createMessage }}</span
          >
          <span v-else class="helper-text validate">{{ createMessage }}</span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            min="0"
            max="10000000"
            v-model="limit"
          />
          <label for="limit">Лимит</label>
          <span v-if="limit < 0" class="helper-text invalid"
            >Недопустимое значние</span
          >
          <span v-else-if="limit === 0" class="helper-text validate"
            >Введите лимит</span
          >
          <span v-else class="helper-text validate">{{ limitMessage }}</span>
        </div>

        <button
          class="btn waves-effect waves-light"
          type="submit"
          v-bind:disabled="isButtonDisabled"
          v-on:click.prevent="createLimit"
        >
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameCategory: "",
      limit: "",
      createMessage: '',
      limitMessage: '',
    };
  },
  methods: {
    createLimit() {
      const newLimit = {
        id: Date.now(),
        nameCategory: this.nameCategory[0].toUpperCase() + this.nameCategory.slice(1),
        limit: this.limit,
        spent: 0,
      };
      if (this.$store.getters.categories.some((el) => el.nameCategory.toLowerCase() === this.nameCategory.toLowerCase())) {
        this.createMessage = 'Такая категория уже существует'
      } else {
        this.$store.commit("pushToCategories", newLimit);
        this.createMessage = 'Категория создана'
        this.limitMessage = ''
        this.$router.push('/planning')  
      }
      
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.nameCategory !== "" && this.limit > 0) return false;
      return true;
    },
  },
};
</script>