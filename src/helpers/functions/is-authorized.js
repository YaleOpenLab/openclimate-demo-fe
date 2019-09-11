import Storage from "../../services/Storage";

const isAuthorized = () => {
  return Storage.get("token");
};

export default isAuthorized;
