<template>
  <div class="container">
    <div class="sidebar">
      <search-form @search="handleSearch" />
      <countries-list :countries="filteredCountries" />
    </div>
    <div class="main-content">
      <random-countries-widget />
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import CountriesList from "@/components/CountriesList.vue";
import RandomCountriesWidget from "@/components/RandomCountriesWidget.vue";

export default {
  name: "home-page",
  components: {
    SearchForm,
    CountriesList,
    RandomCountriesWidget,
  },
  data() {
    return {
      searchQuery: "",
      countries: [],
    };
  },

  created() {
    const apiUrl = process.env.VUE_APP_API_URL;
    fetch(`${apiUrl}/AvailableCountries`)
      .then((response) => response.json())
      .then((data) => {
        this.countries = data;
      });
  },

  computed: {
    filteredCountries() {
      return this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 30%;
  background-color: #f0f0f0;
  padding: 20px;
}

.main-content {
  width: 70%;
  background-color: #ffffff;
  padding: 20px;
}
</style>
