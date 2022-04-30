<template>
  <Form 
    class="card auth-card" 
    v-on:submit="onSubmit"
    >
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <div class="input-field">
        <Field
          name="email"
          v-bind:rules="isRequiredEmail"
          id="email"
          type="text"
          class="validate"
          v-model.trim="emailSet.value"
        />
        <label for="email">Email</label>
        <small v-if="emailSet.value.length === 0"></small>
        <small v-else-if="emailSet.ready === false" class="helper-text invalid"><ErrorMessage name="email" /></small>
      </div>

      <div class="input-field password">
        <Field
          name="password"
          v-bind:rules="isRequiredPassword"
          id="password"
          v-model:type="passwordSet.typeOfPassword"
          class="validate"
          v-model.trim="passwordSet.value"
        />
        <label for="password" >Пароль</label>
        <button class="btn waves-effect waves-light" v-on:click="typePassword">Показать</button>
        <small v-if="passwordSet.value.length === 0"></small>
        <small v-else-if="passwordSet.ready === false" class="helper-text invalid"><ErrorMessage name="password"/></small> 
      </div>

    </div>
    <div class="card-action">
      <div>
        <button v-bind:disabled="isButtonDisabled" class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "login",
  setup() {},
  data() {
    return {
      emailSet: {
        value: '',
        ready: false
      },
      passwordSet: {
        value: '',
        typeOfPassword: "password",
        ready: false
      },
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage
  },
  validatons: {},
  methods: {
    onSubmit() {
      const formData = {
        email: this.emailSet.value,
        password: this.passwordSet.value
      }
      this.$router.push("/");
      console.log(formData)
    },
    isRequiredEmail(value) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (reg.test(value) === true) {
        this.emailSet.ready = true
        return true
      }
      else {
        this.emailSet.ready = false;
        return 'Неверный email'
      }
    },
    isRequiredPassword(value) {
      const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (reg.test(value) === true) {
        this.passwordSet.ready = true
        return true
      }
      else {
        this.passwordSet.ready = false;
        return 'Пароль должен содержать не менее 8 смволов, одной сточной, одной заглавной букв и одной цифры'
      }
    },
    typePassword () {
      if (this.passwordSet.typeOfPassword === "password") this.passwordSet.typeOfPassword  = "text"
      else this.passwordSet.typeOfPassword =  "password"
    },

  },
  computed: {
        isButtonDisabled() {
      if (this.emailSet.ready === true && this.passwordSet.ready === true) return false
      return true
    }
  }
};

</script>
