import React, { useState } from 'react';
import './Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { setStudentDetails } from '../store/formSlice';

const Form = () => {
    const[name,setName] = useState('');
    const[id,setId] = useState('');
    const[std,setStd]= useState('');
    const[age,setAge]= useState('');

    const dispatch = useDispatch();
    const studentDetails = useSelector((state)=> state.form.studentDetails);

    function handleName(e){
        setName(e.target.value)
    }

    function handleId(e){
        setId(e.target.value)
    }

    function handleStd(e){
        setStd(e.target.value)
    }

    function handleAge(e){
        setAge(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        if(name === ''){
            alert("please enter a valid name")
        }
        else if(id === ''){
            alert("please enter a valid name")
        }
        else if(std === ''){
            alert("please enter a valid name");
        }
        else if(age === ''){
            alert("please enter a valid name");
        }
        else{
            const studentData = {
                name,
                id,
                std,
                age
            }

            const existStudent = localStorage.getItem('Students');
            const parsedStudent = JSON.parse(existStudent);

            if(parsedStudent){
                const studentExist =  parsedStudent.find((student)=>(
                    student.id === id || student.age === age
                ));

                if(studentExist){
                    alert("The student details already exists");
                    return;
                }
            }

            const updatedStudentDetails = [...studentDetails,studentData]

            localStorage.setItem('students', JSON.stringify(updatedStudentDetails));

            dispatch(setStudentDetails(updatedStudentDetails));
            alert("Student details are stored")

            setName('');
            setAge('')
            setId('')
            setStd('')


        }


    }


  return (

    <div>
    <form>

        <input type="text" value={name} onChange={handleName} />
        <input type="text" value={id} onChange={handleId} />
        <input type="text" value={std} onChange={handleStd}/>
        <input type="text" value={age} onChange={handleAge}/>

        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </form>


    </div>
  )
}

export default Form