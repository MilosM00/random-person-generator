import React from "react";

const Person = (props) =>{
    return(

        <div className="person">

            <div className="overlay-person">

                <div className="inline">

                    <div className="short-info">

                        <img src={props.image} alt="" />

                        <p>Username: <span>{props.username}</span></p>
                        <p>Password: <span>{props.password}</span></p>
                        <p>E-mail: <span>{props.email}</span></p>

                    </div>

                    <div className="wide-info">

                        <p>Name: <span>{props.firstName} {props.lastName}</span></p>
                        <p>Date of Birth: <span>{props.dateOfBirth}</span></p>
                        <p>Gender: <span>{props.gender}</span></p>
                        <p>Country: <span>{props.country}</span></p>
                        <p>State: <span>{props.state}</span></p>
                        <p>City: <span>{props.city}</span></p>
                        <p>Street Name: <span>{props.streetName}</span></p>
                        <p>Street Address: <span>{props.street}</span></p>
                        <p>Zip Code: <span>{props.zip}</span></p>
                        <p>Phone Number: <span>{props.phone}</span></p>
                        <p>Job Title: <span>{props.job}</span></p>
                        <p>Best Skill: <span>{props.skill}</span></p>

                    </div>

                </div>


                <button onClick={props.generate} className="button-new-person" >New Person</button>
            </div>

        </div>

    );
};

export default Person;