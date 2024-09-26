
# Holidays Info App

This project is a Vue.js application that fetches and displays country holidays using the Nager.Date API. The app consists of two main pages: the **Home Page** and the **Country Page**. The **Home Page** allows users to search for countries and displays random countries with their upcoming holidays. The **Country Page** displays a list of holidays for the selected country and allows year-based navigation.

## Features

- **Home Page:**
  - Search for countries by name.
  - Display a list of random countries with their upcoming holidays.
  - Navigate to the **Country Page** by clicking on a country.
- **Country Page:**
  - Display holidays for a selected country.
  - Switch between years (2020-2030) to see holidays for different years.
  
## Technologies Used

- **Vue.js 3**
- **Axios** for making HTTP requests.
- **Vue Router** for navigation.
- **Nager.Date API** for fetching holidays data.

## Project Setup

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)

### Clone the Repository

```bash
git clone https://github.com/your-username/holidays-info-app.git
cd holidays-info-app
```

### Install Dependencies

```bash
npm install
```

This command installs all the necessary npm dependencies required to run the project.

### Environment Variables

Create a `.env` file in the root of your project and add the following variable to configure the API base URL:

```
VUE_APP_API_URL=https://date.nager.at/api/v3
```

### Run the Application

```bash
npm run serve
```

This command starts a local development server. By default, the app runs at `http://localhost:8080/`. You can open this in your browser to see the application in action.

### Build for Production

```bash
npm run build
```

This command generates the production-ready static files, which can be served by a web server.

### Lint and Fix Files

```bash
npm run lint
```

This command lints your codebase and automatically fixes linting issues based on the ESLint configuration.

## Folder Structure

- **/src**
  - **components**: Contains reusable components such as `SearchForm.vue`, `CountriesList.vue`, and `RandomCountriesWidget.vue`.
  - **pages**: Contains the main pages (`HomePage.vue`, `CountryPage.vue`).
  - **router**: Vue Router configuration for handling page navigation.
  - **App.vue**: The root component of the Vue.js application.
  - **main.js**: The entry point for the Vue.js application, where the app is initialized.

## API Information

This project uses the [Nager.Date API](https://date.nager.at/Api) to fetch the list of countries and public holidays.

- **AvailableCountries** endpoint: Fetches the list of available countries.
- **NextPublicHolidaysWorldwide** endpoint: Fetches upcoming holidays worldwide.
- **PublicHolidays/{year}/{countryCode}** endpoint: Fetches holidays for a specific country and year.

## Troubleshooting

If you encounter any issues, make sure you have correctly set up the `.env` file with the API URL and that your internet connection is active.

## Additional Notes

- The application automatically fetches random countries on each page load.
- The holiday data is updated based on the country you select from the home page or random widget.
