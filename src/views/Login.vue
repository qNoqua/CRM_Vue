<template>
  <Form class="card auth-card">
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
        <small
          v-if="emailSet.value.length === 0"
          class="helper-text validate"
        ></small>
        <small v-else-if="emailSet.ready === false" class="helper-text invalid"
          ><ErrorMessage name="email"
        /></small>
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
        <label for="password">Пароль</label>
        <button
          class="btn waves-effect waves-light"
          v-on:click.prevent="typePassword"
        >
          Показать
        </button>
        <small v-if="passwordSet.value.length === 0"></small>
        <small
          v-else-if="passwordSet.ready === false"
          class="helper-text invalid"
          ><ErrorMessage name="password"
        /></small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          v-bind:disabled="isButtonDisabled"
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          v-on:click.prevent="signIn"
        >
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
import messages from "@/utils/messages";
import ValidateMethods from "@/mixins/validateMethods";

export default {
  name: "login",
  mixins: [ValidateMethods],
  data() {
    return {
      emailSet: {
        value: "",
        ready: false,
      },
      passwordSet: {
        value: "",
        typeOfPassword: "password",
        ready: false,
      },
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async signIn() {
      this.$store.dispatch("signIn", {
        email: this.emailSet.value,
        password: this.passwordSet.value,
      });
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.emailSet.ready === true && this.passwordSet.ready === true)
        return false;
      return true;
    },
  },
};
</script>
