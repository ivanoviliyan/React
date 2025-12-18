import type { WeatherData } from '../../features/weather/weatherTypes';
import styles from './WeatherResult.module.css';
import { WeatherEmoji } from '../../features/weather/weatherTypes';

interface WeatherResultProps {
   data: WeatherData | null;
   loading: boolean;
   error: string | null;
}

const weatherEmoji = (data: WeatherData | null): string => {
   if (!data) return '';

   const temp = data.tempC;

   if (temp >= 20) return WeatherEmoji.Sunny;
   if (temp <= 0) return WeatherEmoji.Snow;

   return WeatherEmoji.PartlyCloudy;
};

const WeatherResult = ({ data, loading, error }: WeatherResultProps) => {
   return (
      <section className={styles.weatherCard}>
         {loading && <p>Loading...</p>}

         {data ? (
            <>
               <p>➡️ {data.city} 📍</p>
               <p>
                  {weatherEmoji(data)} {data.tempC} °C
               </p>
               <p>
                  {weatherEmoji(data)} {data.tempF} °F
               </p>
            </>
         ) : (
            <p>{error}</p>
         )}
      </section>
   );
};

export default WeatherResult;
