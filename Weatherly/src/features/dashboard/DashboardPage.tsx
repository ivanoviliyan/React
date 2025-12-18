import { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../weather/weatherSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherResult from '../../components/WeatherResult';
import WeatherCard from '../../components/WeatherCard';
import { addCity } from '../favorites/favoritesSlice';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Dashboard.module.css';

const DashboardPage = () => {
   const [cityValue, setCityValue] = useState<string>('');
   const dispatch = useAppDispatch();
   const { data, loading, error } = useAppSelector((state) => state.weather);
   const cities = useAppSelector((state) => state.favorites.cities);
   const user = useAppSelector((state) => state.auth.user);

   useEffect(() => {
      if (cities.length === 0) return;

      const interval = setInterval(() => {
         cities.forEach((weather) => {
            dispatch(fetchWeatherByCity(weather.city));
         });
      }, 5 * 60 * 1000);

      return () => clearInterval(interval);
   }, [cities, dispatch]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!cityValue.trim() || loading) return;

      dispatch(fetchWeatherByCity(cityValue.trim()));
   };

   const isCityAlreadyAdded = () => {
      if (!data) return false;
      return cities.some((item) => item.city === data.city);
   };

   const handleAddToFavorites = (e: React.FormEvent) => {
      e.preventDefault();

      if (!data) return;
      if (isCityAlreadyAdded()) return;

      dispatch(addCity(data));
   };

   return (
      <>
         <Navigation />
         <p className={styles.header}>
            {user ? `👋🏻 ${user.username}` : 'Welcome to Weatherly'}
         </p>

         <form onSubmit={handleSubmit}>
            <section className={styles.search}>
               <input
                  type='text'
                  value={cityValue}
                  onChange={(e) => setCityValue(e.target.value)}
                  placeholder='Enter city'
               />
               <button type='submit' disabled={!cityValue.trim() || loading}>
                  {loading ? 'Loading...' : 'Load Weather'}
               </button>
            </section>
            <WeatherResult data={data} loading={loading} error={error} />
            {data && (
               <button
                  onClick={handleAddToFavorites}
                  disabled={isCityAlreadyAdded()}
               >
                  Add {data.city} to favorites
               </button>
            )}
         </form>

         <div className='favorites'>
            {cities.map((weather) => (
               <WeatherCard
                  key={weather.city}
                  city={weather.city}
                  tempC={weather.tempC}
                  tempF={weather.tempF}
               />
            ))}
         </div>
      </>
   );
};

export default DashboardPage;
