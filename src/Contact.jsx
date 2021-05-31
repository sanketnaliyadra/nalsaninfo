import React, { useState } from 'react';

const Contact = () => {
    const[data,setData] = useState({
        name:"",
        phone:"",
        email:"",
        message:""
    });

    const InputEvent = (e) => {
        const{name,value} = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `Name :- ${data.name} 
            Phone :- ${data.phone} 
            Email :- ${data.email} 
            Message :- ${data.message} `
        )
    }

    return (
        <>
            <div className="my-4">
                <h1 className="text-center gradient">Contact Us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="hvr-sweep-to-top" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;