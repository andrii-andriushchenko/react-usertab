/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';
import { getUsers } from '../../api/getUsers';
import { User } from '../../types/User';
import { Loader } from '../Loader';
import './Users.css';

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const usersFromServer: User[] = await getUsers();

      setUsers(usersFromServer);
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {!isLoading ? (
        <table
          className="table
          is-hoverable
          is-fullwidth
          has-text-centered"
        >
          <thead>
            <tr>
              <th className="has-text-centered">ID</th>
              <th className="has-text-centered">NAME</th>
              <th className="has-text-centered">USERNAME</th>
              <th className="has-text-centered"></th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => {
              const { id, name, username } = user;

              return (
                <tr key={id}>
                  <td className="is-vcentered">
                    {id}
                  </td>

                  <td className="is-vcentered">
                    {name}
                  </td>

                  <td className="is-vcentered">
                    {username}
                  </td>

                  <td className="is-vcentered has-text-right">
                    <button className="button">SELECT</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loader />
      )};
    </>
  );
};
