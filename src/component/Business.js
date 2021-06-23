
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Business({ handleChange, nextStep ,prevStep}) {
    const notify = () => toast("Please Fill All the Fields");
    const [business, setBusiness] = useState([]);
    const [count, setCount] = useState([1])

    const [obj, setObj] = useState({
        companyname: "",
        expirience: "",
        year: ""
    });
   
   


    const increaseCount = () => {
        if (!obj.companyname.length || !obj.expirience.length || !obj.year.length) {
             return notify();
        } else {
            setBusiness(business=>[...business, obj])
            setCount([...count, 1])
            setObj({
                companyname: "",
                expirience: "",
                year: ""
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        increaseCount()
        nextStep()

       
       
    }

    const insertBusiness = (e) => {
        
        setObj({ ...obj, [e.target.name]: e.target.value })
        
    }
    return (
        <>
            <form className="form scroll-form" onSubmit={handleSubmit}>
                <span onClick={increaseCount}><i className="fas fa-plus-circle fa-2x"></i></span>
                {count.map((idx, element) => {
                    return (
                        <div className="form-group">
                            <label>Business</label>
                            <input type="text" name="companyname" placeholder="Enter Your Company Name" onChange={insertBusiness} />
                            <input type="text" name="expirience" placeholder="Enter Your Expirience" onChange={insertBusiness} />
                            <input type="text" name="year" placeholder="Enter Your Year" onChange={insertBusiness} />
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

export default Business
