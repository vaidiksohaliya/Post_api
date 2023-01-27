import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {

  const { id } = useParams();
  const user_id = `${id}`;

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [contact, setcontact] = useState('');


  useEffect(() => {
    axios.post('http://localhost/post_dataphp/edit.php', {
      Edit_id: user_id

    })
      .then(function (data) {
        console.log(data);
        setname(data.data.name)
        setemail(data.data.email)
        setpassword(data.data.password)
        setcontact(data.data.contact)

      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  // setinput(data.data);


 const submit=() => {
    axios.post('http://localhost/post_dataphp/post.php', {
      Edit_id: user_id,
      name: name,
      email: email,
      password: password,
      contact: contact,

    })
      .then(function (data) {
        console.log(data)
      })
      .catch(function (error) {
        console.log(error)
      })

      window.location.href='/view'

  }

return (
  <div>
    {/* <form > */}
    <table>
      <tr>
        <td>name</td>
        <td><input type="text" name='name' value={name} onChange={(i) => setname(i.target.value)} /></td>
      </tr>
      <tr>
        <td>email</td>
        <td><input type="email" name='email' value={email} onChange={(i) => setemail(i.target.value)} /></td>
      </tr>
      <tr>
        <td>password</td>
        <td><input type="password" name='password' value={password} onChange={(i) => setpassword(i.target.value)} /></td>
      </tr>
      <tr>
        <td>contact</td>
        <td><input type="text" name='contact' value={contact} onChange={(i) => setcontact(i.target.value)} /></td>
      </tr>
      <tr>
        <td><input type="submit" onClick={submit}></input></td>
      </tr>
    </table>
    {/* </form> */}
  </div>
)
}
export default Edit