import { Roles } from "./roles-model";

export interface User{
  id: string,
  username: string,
  email: string,
  role: Roles
}
