class HttpService {
  get(url) {
    const options = {
      method: 'GET',
    };

    return fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
