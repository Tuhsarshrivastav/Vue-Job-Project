<template>
  <div>
    <div class="box">
      <h1 class="title is-5">Create Vacancy</h1>
      <form>
        <input
          v-model="form.title"
          class="input "
          type="text"
          placeholder="Job Title"
          required
        />
        <input
          v-model="form.company"
          class="input "
          type="text"
          placeholder="Company name"
          required
        />
        <input
          v-model="form.city"
          class="input "
          type="text"
          placeholder="City name"
          required
        />
        <textarea
          v-model="form.description"
          class="input "
          type="text"
          placeholder="Job description"
          required
        ></textarea>
        <button class="button is-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        company: "",
        city: "",
        description: "",
      },
    };
  },
};
</script>

<style scoped>
input,
textarea {
  margin-bottom: 20px;
}
</style>
