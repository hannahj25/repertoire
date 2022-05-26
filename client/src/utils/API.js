import axios from 'axios';

export const searchAPI = async (query) =>
axios.get(`https://api.openopus.org/omnisearch/${query}/0.json`);

