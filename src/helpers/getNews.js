import axios from 'axios';

export default async () => {
  const query = {
    q: 'yılmaz özdil',
    url: 'https://www.sozcu.com.tr/',
    language: 'tr',
    // country: 'tr',
    sortBy: 'publishedAt',
    apikey: process.env.REACT_APP_API_KEY,
  };
  const parameters = Object.entries(query)
    .map((parameter) => parameter.join('='))
    .join('&');
  const tokenURL = `https://newsapi.org/V2/everything?${parameters}`;

  try {
    const response1 = await axios.get(tokenURL);
    return response1;
  } catch (err) {
    return err;
  }
};
