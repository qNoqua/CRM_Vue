<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <create-category/>
        <edit-category/>
      </div>
    </section>
  </div>
</template>

<script>
import CreateCategory from '../components/categories/CreateCategory.vue';
import EditCategory from '../components/categories/EditCategory.vue';
export default {
  components:  {
    CreateCategory, EditCategory
  }
};
</script>
