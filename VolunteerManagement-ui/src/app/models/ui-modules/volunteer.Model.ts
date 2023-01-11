import { Gender } from "../api-models/gender.model";


export interface Volunteer{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  profileImageUrl: string,
  phoneNumber: number,
  gender: Gender
}
