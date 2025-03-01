import baseUrl from "../Api/baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseUrl.get(url, parmas);
  return res.data;
};

const useGetDataToken = async (url, parms) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("users")}` },
  };
  const res = await baseUrl.get(url, config, parms);
  return res.data;
};

export { useGetData, useGetDataToken };
