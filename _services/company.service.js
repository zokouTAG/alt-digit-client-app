import Axios from "./caller.service";

let updatePermissions = (data, companyId) => {
  return Axios.put("/tech/companies", {
    companyId: companyId,
    permissionAssignments:data,
  });
};

let getCompanyInfo = (id) => {
  return Axios.get(`/tech/companies/${id}`);
};

let getTeams = (companyId) => {
  return Axios.get(`/tech/companies/${companyId}/teams`);
}

let createTeam = (teamName, teamColor, companyId) => { 
  return Axios.post(`/tech/companies/${companyId}/teams`, {
    name: teamName,
    color: teamColor,
  });
}

let deleteTeam = (teamId) => {
  return Axios.delete(`/tech/companies/teams/${teamId}`);
}

let updateTeam = (teamId, teamName, teamColor) => { 
  return Axios.put(`/tech/companies/teams/${teamId}`, {
    name: teamName,
    color: teamColor,
  });
}

let addUser = (firstName, lastName, teamId, roleId, email) => {
  return Axios.post(`/tech/companies/roles/${roleId}/users`, {
    firstName: firstName,
    lastName: lastName,
    teamId: teamId,
    email: email,
  });
}

let getUser = (companyId) => {
  return Axios.get(`/tech/companies/${companyId}/users`);
}

export const CompanyService = {
    getCompanyInfo,
  updatePermissions,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  addUser,
  getUser
};