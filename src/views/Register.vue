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
        <small v-if="emailSet.value.length === 0"></small>
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
      <div class="input-field">
        <Field
          name="name"
          v-bind:rules="isRequiredName"
          id="name"
          type="text"
          class="validate"
          v-model.trim="nameSet.value"
        />
        <label for="name">Имя</label>
        <small v-if="nameSet.value.length === 0"></small>
        <small v-else-if="nameSet.ready === false" class="helper-text invalid"
          ><ErrorMessage name="name"
        /></small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agreements"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          v-bind:disabled="isButtonDisabled"
          v-on:click.prevent="onSubmit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login" href="/">Войти!</router-link>
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
        value: "",
        ready: false,
      },
      passwordSet: {
        value: "",
        typeOfPassword: "password",
        ready: false,
      },
      nameSet: {
        value: "",
        ready: false,
      },   
      agreements: false,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  validatons: {},
  methods: {
    onSubmit() {
      const formData = {
        email: this.emailSet.value,
        password: this.passwordSet.value,
        name: this.nameSet.value,
      };
      this.$router.push("/");
      console.log(formData);
    },
    isRequiredEmail(value) {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (reg.test(value) === true) {
        this.emailSet.ready = true;
        return true;
      } else {
        this.emailSet.ready = false;
        return "Неверный email";
      }
    },
    isRequiredPassword(value) {
      const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (reg.test(value) === true) {
        this.passwordSet.ready = true;
        return true;
      } else {
        this.passwordSet.ready = false;
        return "Пароль должен содержать не менее 8 смволов, одной сточной, одной заглавной букв и одной цифры";
      }
    },
    isRequiredName(value) {
      const reg = /^[а-яА-Я ]+$/;
      if (reg.test(value) === true) {
        this.nameSet.ready = true;
        return true;
      } else {
        this.nameSet.ready = false;
        return "Недопустимое имя";
      }
    },
    typePassword() {
      if (this.passwordSet.typeOfPassword === "password")
        this.passwordSet.typeOfPassword = "text";
      else this.passwordSet.typeOfPassword = "password";
    },
    async requestItems() {
      const response = await fetch("http://localhost:7007/items");
      const data = await response.json();
      console.log(data);
    },
    async requestItemById(id) {
      try {
        const response = await fetch(`http://localhost:7007/items/${id}`);
        if(response.status >= 400) return
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
    async requestItemCreate() {
      const data = new FormData();
      data.append("name", "Maksim");
      const response = await fetch(`http://localhost:7007/items/`, {
        method: "POST",
        headers: {
          Accept: "application/json, application/xml, text/plain, text/html, .",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Maxim",
          data: 28,
        }),
      });
      console.log(response);
    },
    async requestItemUpdate() {
      const data = new FormData();
      data.append("name", "Maksim");
      const response = await fetch(`http://localhost:7007/items/Allah`, {
        method: "PUT",
        headers: {
          Accept: "application/json, application/xml, text/plain, text/html, .",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "name",
          data: 1488,
        }),
      });
      console.log(response);
    },
    async requestItemDelete(id) {
      const data = new FormData();
      data.append("name", "Maksim");
      const response = await fetch(`http://localhost:7007/items/${id}`, {
        method: "DELETE",
      });
      console.log(response);
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.emailSet.ready === true && this.passwordSet.ready === true && this.nameSet.value.length > 1 && this.agreements === true)
        return false;
      return true;
    },
  },
};
</script>
