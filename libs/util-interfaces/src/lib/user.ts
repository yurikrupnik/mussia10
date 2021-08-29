export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  provider: "google"| 'github';
  games: string;
}
