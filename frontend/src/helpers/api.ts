const client = (endpoint: string, { body, ...customConfig }: any) => {
  // Check for token here
  const config: any = {
    ...customConfig,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${process.env.REACT_APP_URL}${endpoint}`, config).then(
    (res) => {
      if (!res.ok) {
        throw Error("Something went wrong fetch");
      }
      return res.json();
    }
  );
};

export const get = (endpoint: string) => {
  return client(endpoint, { method: "GET" });
};

export const post = (endpoint: string, data: any) => {
  return client(endpoint, { body: data, method: "POST" });
};
