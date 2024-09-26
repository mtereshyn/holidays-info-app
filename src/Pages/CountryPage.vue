<template>
  <div>
    <h1>{{ countryName }}</h1>
    <div class="holidays__list" v-if="holidays.length > 0">
      <div v-for="holiday in holidays" :key="holiday.date" class="holiday-info">
        <p>
          <strong>{{ holiday.name }}</strong>
        </p>
        <p>{{ holiday.date }}</p>
      </div>
    </div>
    <p v-else>No holidays available for this year.</p>
    <div class="year-switcher">
      <button
        v-for="year in years"
        :key="year"
        :class="{ active: year === currentYear }"
        @click="fetchHolidaysForYear(year)"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "country-page",
  data() {
    return {
      holidays: [],
      countryName: "",
      years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    fetchHolidaysForYear(year) {
      const apiUrl = process.env.VUE_APP_API_URL;
      const countryCode = this.$route.params.countryCode;
      axios
        .get(`${apiUrl}/PublicHolidays/${year}/${countryCode}`)
        .then((response) => {
          this.holidays = response.data;
        })
        .catch((error) => {
          console.error("Error fetching holidays:", error);
        });
      this.currentYear = year;
    },
    fetchCountryName() {
      const apiUrl = process.env.VUE_APP_API_URL;
      const countryCode = this.$route.params.countryCode;
      axios
        .get(`${apiUrl}/AvailableCountries`)
        .then((response) => {
          const country = response.data.find(
            (c) => c.countryCode === countryCode
          );
          if (country) {
            this.countryName = country.name;
          } else {
            this.countryName = "Unknown Country";
          }
        })
        .catch((error) => {
          console.error("Error fetching country name:", error);
          this.countryName = "Unknown Country";
        });
    },
  },
  created() {
    this.fetchCountryName();

    this.fetchHolidaysForYear(this.currentYear);
  },
};
</script>

<style scoped>
.holiday-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  max-width: 200px;
  min-height: 150px;
  max-height: 150px;
  padding: 10px;
  border: 1px solid #000;
  margin-bottom: 10px;
  background-color: #e5e5e5;
  border-radius: 4px;
}

.year-switcher {
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}

button.active {
  background-color: #000;
  color: #fff;
}

.holidays__list {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
