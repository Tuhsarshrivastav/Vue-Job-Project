<template>
  <div>
    <div class="box">
      <h1 class="title is-5">Create Vacancy</h1>
      <form>
        <input class="input " type="text" placeholder="Job Title" />
        <input class="input " type="text" placeholder="Company name" />
        <input class="input " type="text" placeholder="City name" />
        <textarea
          class="input "
          type="text"
          placeholder="Job description"
        ></textarea>
        <button class="button is-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input,
textarea {
  margin-bottom: 20px;
}
</style>
