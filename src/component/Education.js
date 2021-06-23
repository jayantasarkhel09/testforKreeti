
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Education({ handleChange, nextStep,prevStep }) {
    const notify = () => toast("Please Fill All the Fields");

    const [educations, setEducations] = useState([]);
    const [count, setCount] = useState([1])

    const [obj, setObj] = useState({
        degree: "",
        college: "",
        year: ""
    });
   
   


    const increaseCount = () => {
        if (!obj.degree.length || !obj.college.length || !obj.year.length) {
            return notify();
        } else {
           setEducations(educations=>[...educations, obj])
            setCount([...count, 1])
            setObj({
                degree: "",
                college: "",
                year: ""
            })
        }

    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        increaseCount()
        nextStep()

        console.log("education", educations);
       
    }

    const inserEducationDetails = (e) => {
        
        setObj({ ...obj, [e.target.name]: e.target.value })
        
    }
    return (
        <>
            <form className="form scroll-form" onSubmit={handleSubmit}>
                <span onClick={increaseCount}><i className="fas fa-plus-circle fa-2x"></i></span>
                {count.map((idx, element) => {
                    return (
                        <div className="form-group">
                            <label>Degree</label>
                            <input type="text" name="degree" placeholder="Enter Your Degree" onChange={inserEducationDetails} />
                            <input type="text" name="college" placeholder="Enter Your College" onChange={inserEducationDetails} />
                            <input type="text" name="year" placeholder="Enter Your Year" onChange={inserEducationDetails} />
                        </div>

                    )
                })}


                <button className="submit-btn" type="submit">Next</button>
                <button className="submit-btn" onClick={()=>prevStep()}>previous</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default Education
