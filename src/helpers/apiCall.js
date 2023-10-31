import axios from 'axios';
const GET = async (url = '') => {
  if (url?.length === 0 || !url) return;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (_) {}
};

const POST = (url = '', payload) => {
  if (url?.length === 0 || !url) return;
  return axios.post(url, payload);
};

export {GET, POST};
