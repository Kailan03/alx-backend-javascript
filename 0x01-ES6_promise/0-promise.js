export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const response = { data: 'Response from the API' };
      resolve(response);
    }, 2000);
  });
}
