import config from "../@prix_config.js";

const CACHE_KEY = 'cachedData';
const CACHE_TIME_KEY = 'cacheTimestamp';
const CACHE_EXPIRY_TIME = 2 * 60 * 1000; // 2 minutes in milliseconds

export default async function API() {
  try {
    // Check if cached data is still valid
    const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
    const cacheTimestamp = localStorage.getItem(CACHE_TIME_KEY);

    if (cachedData && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_EXPIRY_TIME) {
      return cachedData;
    }

    // Fetch new data if cache is expired or doesn't exist
    const response = await fetch(config.keyGoogleSheetsGet);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Cache the new data and update the timestamp
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());


    return data;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    throw error; // Re-throw the error to inform the calling code about the failure
  }
}
