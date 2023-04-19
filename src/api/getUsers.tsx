import { User } from '../types/User';

export function getUsers (): Promise<User[]> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
}
