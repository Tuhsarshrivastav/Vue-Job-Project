<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Find yoour dream jon today
        </p>
        <p class="subtitle">
          Apply for any vacancies
        </p>
      </div>
    </section>
    <NewVcancy />
  </div>
</template>

<script>
import NewVcancy from "../components/NewVacancy.vue";
export default {
  components: { NewVcancy },
};
</script>

<style scoped></style>
