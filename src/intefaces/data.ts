export interface UserInfoCSV {
  userId: number;
  name: string;
  email: string;
  city: string
  zipcode: string;
}

export interface UserInfo {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string
  }
}