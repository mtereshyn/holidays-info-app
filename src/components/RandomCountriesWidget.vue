<template>
  <div>
    <h3>Random Countries Widget</h3>
    <div v-if="randomCountries.length > 0">
      <div
        v-for="(country, index) in randomCountries"
        :key="index"
        class="country-widget"
      >
        <router-link
          :to="{
            name: 'country',
            params: { countryCode: country.countryCode },
          }"
        >
          <h4>{{ country.country }}</h4>
        </router-link>
        <p>Next Holiday: {{ country.name || "No holidays available" }}</p>
        <p>Date: {{ formatDate(country.date) || "N/A" }}</p>
      </div>
    </div>
    <p v-else>No random countries to display.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "random-countries-widget",
  data() {
    return {
      randomCountries: [],
      countryNames: {},
    };
  },
  methods: {
    fetchRandomCountries() {
      const apiUrl = "https://date.nager.at/api/v3";
      axios
        .get(`${apiUrl}/NextPublicHolidaysWorldwide`)
        .then((response) => {
          this.randomCountries = this.getRandomCountries(response.data, 3);

          return axios.get(`${apiUrl}/AvailableCountries`);
        })
        .then((response) => {
          response.data.forEach((country) => {
            this.countryNames[country.countryCode] = country.name;
          });

          this.randomCountries = this.randomCountries.map((country) => {
            return {
              ...country,
              country: this.countryNames[country.countryCode],
            };
          });
        })
        .catch((error) => {
          console.error("Error fetching random countries:", error);
        });
    },
    getRandomCountries(countries, count = 3) {
      return countries.sort(() => 0.5 - Math.random()).slice(0, count);
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
  created() {
    this.fetchRandomCountries();
  },
};
</script>

<style scoped>
.country-widget {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #ffffff;
}
</style>
