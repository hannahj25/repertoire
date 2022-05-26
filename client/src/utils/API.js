import axios from 'axios';

const search = async (query) =>
axios.get(`https://api.openopus.org/omnisearch/${query}/0.json`);

export default { search };