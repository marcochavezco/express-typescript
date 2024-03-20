export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: number;
  data: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}