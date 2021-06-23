import React from 'react'



function PersonalDetails({handleChange,nextStep}) {
   
    
    return (
        <>
        <form className="form" onSubmit={nextStep}>
        <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange}/>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="text" name="age" placeholder="Enter Your Age" required onChange={handleChange}/>
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" placeholder="Enter Your Phone" required onChange={handleChange}/>
        </div>
        <button className="submit-btn" type="submit">Next</button>
        </form>
        </>
    )
}

export default PersonalDetails
