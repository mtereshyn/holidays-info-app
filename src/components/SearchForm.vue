<template>
  <div>
    <input
      type="text"
      v-model="query"
      placeholder="Search country"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "search-form",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onInput() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
input {
  width: 250px;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #000;
}
</style>
