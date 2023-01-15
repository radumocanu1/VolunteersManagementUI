import { Gender } from "../api-models/gender.model";


export interface VolunteerUI{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  profileImageUrl: string,
  phoneNumber: string,
  gender: Gender
}
