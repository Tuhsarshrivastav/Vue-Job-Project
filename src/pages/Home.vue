<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Find yoour dream job today
        </p>
        <p class="subtitle">
          Apply for any vacancies
        </p>
      </div>
    </section>
    <NewVcancy v-if="isAdmin" @save="handlesubmit" />
    <Vacancy
      v-for="vacancy in vacancies"
      :key="vacancy.id"
      :isAdmin="isAdmin"
      :vacancys="vacancy"
      @delete="handledelete"
    />
  </div>
</template>

<script>
import NewVcancy from "../components/NewVacancy.vue";
import Vacancy from "../components/Vacancy.vue";
import { vacancies } from "../../data";
export default {
  components: { NewVcancy, Vacancy },
  data() {
    return {
      vacancies,
      isAdmin: true,
    };
  },
  methods: {
    handlesubmit(formData) {
      this.vacancies.unshift(formData);
    },
    handledelete(vacancyid) {
      this.vacancies = this.vacancies.filter(
        (vacancy) => vacancy.id !== vacancyid
      );
    },
  },
};
</script>

<style scoped></style>
