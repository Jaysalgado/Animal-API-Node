import axios from 'axios';

export async function api(paramName, paramValue, apiPath) {
  const headers = {
    'X-Api-Key': process.env.API_KEY,
  };
  const params = {
    [paramName]: paramValue,
  };
  const options = {
    headers: headers,
    params: params,
  };
  const apiResponse = await axios.get(
    `https://api.api-ninjas.com/v1/${apiPath}`,
    options
  );
  let result = apiResponse.data;
  return result;
}
