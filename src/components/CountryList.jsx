import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on the city on the map" />
    );
  // filter country of cities and return country wiht ijnore duplicate
  const coutries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {coutries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
