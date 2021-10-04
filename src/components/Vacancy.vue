<template>
  <div class="box mt-4 mb-4">
    <h1 class="title is-5">{{ vacancys.title }}</h1>
    <span>{{ vacancys.company }}</span>
    <p>{{ vacancys.city }}</p>
    <div class="block"></div>
    <p>
      {{ vacancys.description }}
    </p>
    <div class="is-flex is-justify-content-space-between">
      <button class="button is-primary mt-4">
        Apply
      </button>
      <button @click="handleDelete(vacancys)" class="button is-danger mt-4 ">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vacancy",
  props: {
    vacancys: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDelete(vacancys) {
      this.$emit("delete",vacancys.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
