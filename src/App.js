import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

function App() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Query Search App </h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for firstName */}
            <Form.Control
              onChange={(e) => setfirstName(e.target.value)}
              placeholder='First Name'
            />
            {/* onChange for lastName */}
            <Form.Control
              onChange={(e) => setlastName(e.target.value)}
              placeholder='Last Name'
            />
            {/* onChange for gender */}
            <Form.Select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Polygender'>Polygender</option>
              <option value='Genderqueer'>Genderqueer</option>
              <option value='Genderfluid'>Genderfluid</option>
              <option value='Non-binary'>Non-binary</option>
              <option value='Bigender'>Bigender</option>
              <option value='Agender'>Agender</option>
            </Form.Select>
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                 return firstName.toLowerCase() === '' 
                 && lastName.toLowerCase() === ''
                 && gender.toLowerCase() === '' 
                  ? item
                  : item.first_name.toLowerCase().includes(firstName)
                    && item.last_name.toLowerCase().includes(lastName)
                    && (gender!=='' ? item.gender === gender:true)
                    ;
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.ip_address}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
      
    </div>
  );
}

export default App;