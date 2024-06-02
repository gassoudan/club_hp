const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const textContent = await response.text();
      return textContent;
    } catch (error) {
      console.error('Error fetching the file:', error);
    }
  };

export default fetchData;