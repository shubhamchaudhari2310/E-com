import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../actions/userAction";
export default function UserTable() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  return (
    <div>
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Delete</button>
                    <button className="btn btn-warning btn-sm ms-3">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
}
