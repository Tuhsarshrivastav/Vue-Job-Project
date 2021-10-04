<template>
  <div class="box mt-4 mb-4">
    <h1 class="title is-5">{{ vacancys.title }}</h1>
    <span>{{ vacancys.company }}</span>
    <p>{{ vacancys.city }}</p>
    <div class="block"></div>
    <p>
      {{ vacancys.description }}
    </p>
    <button class="button is-primary mt-4">
      Apply
    </button>
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
};
</script>

<style lang="scss" scoped></style>
