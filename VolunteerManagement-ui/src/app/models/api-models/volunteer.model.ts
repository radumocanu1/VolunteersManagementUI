import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Volunteer{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  profileImageUrl: string,
  phoneNumber: number,
  gender: Gender,
  genderId: string,
  Address: Address
}
