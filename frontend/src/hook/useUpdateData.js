import baseUrl from "../Api/baseURL";

const useInUpdateDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("users")}`,
    },
  };
  const res = await baseUrl.put(url, parmas, config);
  console.log(res.status);
  return res;
};

const useUpdateData = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("users")}` },
  };
  const res = await baseUrl.put(url, parmas, config);
  return res;
};

export default { useInUpdateDataWithImage, useUpdateData };
