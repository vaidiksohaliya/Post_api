import React, { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
  const [users, setuser] = useState([]);

  const loadusers = async () => {
    const result = await axios.get("http://localhost/post_dataphp/Select.php");
    setuser(result.data);
    // console.log(result.data.phpresult);
  };
  // console.log(users);

  useEffect(() => {
    loadusers();
  }, []);

  const del_btn = (i) => {
    const d_id = i

    axios.post('http://localhost/post_dataphp/delete.php',{
      del_id: d_id
    });
  }

  

  return (
    <div>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>pass</td>
          <td>contact</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
        {users.map((i) => {
          console.log(i.name);
          return (
            <>
              <tr>
                <td>
                  {i.id}
                </td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
                <td>{i.contact}</td>

                <td>
                  <button className="delete">
                    <a href="View" onClick={() => del_btn(i.id)}>Delete</a>
                  </button>
                </td>
                <td>
                  <button className="delete">
                    <a href={`Edit/${i.id}`}>Edit</a>
                  </button>
                </td>  
              </tr>
              
            </>
          )
        })}
        <tr>
          <td><button><a href="/home">back home page</a></button></td>
        </tr>
      </table>
  

    </div>
  );
};

export default View;
