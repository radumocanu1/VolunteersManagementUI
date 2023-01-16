import { Gender } from "../api-models/gender.model";
import { Address } from "./address.model";


export interface VolunteerUIAdmin{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  profileImageUrl: string,
  phoneNumber: string,
  gender: Gender,
  address: Address
}
