const GetData = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/multiseryairesac/Multiser-Y-Aires-Ac/refs/heads/main/src/constants/data/data.json"
    );
    const data = await response.json();

    if (data.error) {
      throw new Error(data.data);
    }

    console.log({ error: false, data });
    return { error: false, data };
  } catch (error) {
    console.error({ error: true, data: error.message });
    return { error: true, data: error.message };
  }
};

export default GetData;
