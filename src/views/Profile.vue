<template>
  <div class="page-title">
    <h3>Профиль</h3>
  </div>

  <form class="form">
    <div class="input-field">
      <input id="description" type="text" v-model.trim="userName"/>
      <label for="description">Имя</label>
      <span v-if="userName.length === 0" class="helper-text validate">Введите новое имя</span>
      <span v-else-if="!this.isRequiredName(this.userName)" class="helper-text invalid">Некорректное имя</span>
      <span v-else class="helper-text validate">Введите новое имя</span>
    </div>

    <div class="input-field">
      <input id="description" type="number" min="0" v-model="userBalance"/>
      <label for="description">Баланс</label>
      <span v-if="userBalance.length === 0" class="helper-text validate">Введите ваш баланс</span>
      <span v-else-if="!this.isRequiredBalance(this.userBalance)" class="helper-text invalid">Введите число</span>
      <span v-else class="helper-text validate">Введите ваш баланс</span>
    </div>
    <button class="btn-small waves-effect waves-light" type="submit" v-bind:disabled="isButtonDisabled" v-on:click="editUserProfile">
      Обновить
      <i class="material-icons right">send</i>
    </button>
  </form>
</template>

<script>
import validateName from "@/mixins/validateName";
import validateBalance from "@/mixins/validateBalance";

export default {
    /*global M*/
    data() {
      return {
        userName: '',
        userBalance: '',
      }
    },
    mixins: [validateName, validateBalance],
    methods: {
      editUserProfile() {
        this.$store.commit('editUserProfile', {name: this.userName, balance: this.userBalance})
        M.toast({html: 'Изменения сохранены'})
      }
    },
    computed: {
      isButtonDisabled() {
        let ready = true;
        if (this.userName !== '' || this.userBalance !== ''){
          if(this.isRequiredName(this.userName) || this.isRequiredBalance(this.userBalance)) ready = false;
        }
        return ready;
      },
  },
}
</script>