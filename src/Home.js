import React from "react";
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contact ,setcontact] = useState("");

  const click = () => {


    axios
      .post("http://localhost/post_dataphp/post.php", {
        name: name,
        email: email,
        password: password,
        contact: contact,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.href='/view'

  };

  return (
    <div>
      <table>
        <tr>
          <td>name:-</td>
          <td>
            <input
              type="text"
              name="name"
              id=""
              onChange={(i) => setname(i.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>email:-</td>
          <td>
            <input
              type="email"
              name="email"
              id=""
              onChange={(i) => setemail(i.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>password:-</td>
          <td>
            <input
              type="password"
              name="password"
              id=""
              onChange={(i) => setpassword(i.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Contact:-</td>
          <td>
            <input
              type="text"
              name="contact"
              id=""
              onChange={(i) => setcontact(i.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              type="submit"
              value="submit"
              className="btn1"
              onClick={click}
            />
          </td>
          <td><a href="/view">View data</a></td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
