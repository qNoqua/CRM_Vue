<template>
  <div class="app-main-layout">
    <navbar v-on:clickBurger="isOpen = !isOpen"/>
    <sidebar v-bind:isOpen="isOpen"/>
    <main class="app-content" v-bind:class="{full: !isOpen}">
      <div class="app-page">
          <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
      </router-link>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
    name: 'MainLayout',
    data() {
      return {
        isOpen: true,
      }
    },
    components: {
      Navbar, Sidebar
    }
}
</script>