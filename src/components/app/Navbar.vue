<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <div>
          <a href="#">
            <i
              class="material-icons black-text"
              v-on:click.prevent="toggleSidebar"
              >dehaze</i
            >
          </a>
        </div>
        <date/>
      </div>
      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            <span v-if="user">{{ user.name }}</span>
            <span v-else>...</span>
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li v-on:click.prevent="logout">
              <a href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>

import  Date  from '@/components/app/date/Date'
export default {
  /*global M*/
  components: {
    Date
  },
  data() {
    return {
      dropdown: null,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("clickBurger");
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
  beforeMount() {
    this.$store.dispatch('requestUser')
  },
  mounted() {
      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: true,
      });

  },
  beforeUnmount() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
