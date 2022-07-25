import { FilterComponent } from "../context/FilterContext";

function MyApp({ Component, pageProps }) {
  return (
    <FilterComponent>
      <Component {...pageProps} />
    </FilterComponent>
  );
}

export default MyApp;
