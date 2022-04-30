<template>
  <ul class="sidenav app-sidenav" v-bind:class="{open: isOpen}">
      <router-link
      v-for="link in this.links"
      v-bind:key="link.name"
      v-bind:to="link.href"
      v-bind:exact="link.exact"
      active-class="active"
      replace>
        <li>
          <a v-bind:href="link.href" 
          class="waves-effect waves-orange pointer">
          {{ link.name }}
          </a>
        </li>
      </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      links: [
        { name: "Счет", href: "/" , exact: true},
        { name: "История", href: "/history" },
        { name: "Планирование", href: "/planning" },
        { name: "Новая запись", href: "/record" },
        { name: "Категории", href: "/categories" },
      ],
    };
  },
};
</script>
>
