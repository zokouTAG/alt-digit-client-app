import { containsProp } from "@vueuse/core";
import Axios from "./caller.service";

let getDynamicValues = (data, companyId) => {
  return Axios.put("/tech/companies", {
    companyId: companyId,
    permissionAssignments:data,
  });
};

export const ContractService = {
    getDynamicValues,
}