import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStudentDetails } from '../store/formSlice';

const FormShow = () => {
  const dispatch = useDispatch();
  const studentDetails = useSelector((state) => state.form.studentDetails);

  useEffect(() => {
    handleGetData();
  }, []);

  function handleGetData() {
    const storedStudent = localStorage.getItem('students');
    const parsedStudent = JSON.parse(storedStudent);

    dispatch(setStudentDetails(parsedStudent));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>std</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.std}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormShow;
