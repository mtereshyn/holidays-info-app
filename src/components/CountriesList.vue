<template>
  <div>
    <h3>Countries List</h3>
    <ul>
      <li v-for="country in countries" :key="country.countryCode">
        <router-link :to="`/country/${country.countryCode}`">
          {{ country.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "countries-list",
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #ffffff;
}
</style>
