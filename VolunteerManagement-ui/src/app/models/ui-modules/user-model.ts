import { Roles } from "../api-models/roles-model"


export interface UserUI{
  id: string,
  email: string,
  token: string,
  role: Roles
  username: string
}
