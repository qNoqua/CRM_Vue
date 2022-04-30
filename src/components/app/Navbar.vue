<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left" >
        <a href="#" >
          <i class="material-icons black-text" v-on:click.prevent="toggleSidebar">dehaze</i>
        </a>
        <span class="black-text" >Дата: {{ currrentDate.day }}.{{ currrentDate.month }}.{{ currrentDate.year }}  Время: {{ currrentDate.hours }}:{{ currrentDate.minutes }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
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
              <a href="#" class="black-text" >
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
export default {
  /*global M*/
  data () {
    return {
      currrentDate: this.timeCounter(),
      interval: null,
      dropdown: null,
    } 
  },
  methods: {
    toggleSidebar() {
      this.$emit('clickBurger')
    },
    logout() {
      console.log('logout')
      this.$router.push('/login?message=logout')
    },
    timeCounter() {
      const date = new Date;
      let year = String(date.getFullYear());
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());
      let min = String(date.getMinutes());
      let hour = String(date.getHours());
      let sec = String(date.getSeconds());
      if (month <= 9) month = '0' + month
      if (day <= 9) day = '0' + day
      if (min <= 9) min = '0' + min
      if (hour <= 9) hour = '0' + hour
      return {
        year: year,
        month: month,
        day: day,
        hours: hour,
        minutes: min,
        sec: sec
      }
    }
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    });
    this.interval = setInterval(() => {
      this.currrentDate = this.timeCounter()  
    }, 1000);
    
  },
  beforeUnmount() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    } 
  }
}
</script>