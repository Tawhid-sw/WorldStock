import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchApi } from "../Features/ApiSclice";

const useApi = (mediyaType) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.apiData);
  useEffect(() => {
    dispatch(FetchApi(mediyaType));
  }, [dispatch, mediyaType]);
  return { data, isLoading, isError };
};
export default useApi;
