class HttpService {
  async fetch(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Erro ao carregar !');
      }

      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
}
