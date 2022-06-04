import React from "react";
import Person from "./components/Person";

const App = () =>{

    const [newPerson, setNewPerson] = React.useState({});

    const [generateNew, setGenerateNew] = React.useState(true);

    const generateNewPerson = () =>{
        setGenerateNew(prevGenerateNew => !prevGenerateNew);
    };
    
    React.useEffect(() =>{
        
        const generatePerson = async () =>{
            
            const response = await fetch("https://random-data-api.com/api/users/random_user");
            const data = await response.json();
            setNewPerson(data);
            
        };
        generatePerson();
        
    }, [generateNew]);
    

    console.log(newPerson);

    return(

        <div>
            
            <Person
                generate={generateNewPerson}
                image={newPerson.avatar}
                firstName={newPerson.first_name}
                lastName={newPerson.last_name}
                job={newPerson.employment?.title}
                skill={newPerson.employment?.key_skill}
                dateOfBirth={newPerson.date_of_birth}
                gender={newPerson.gender}
                username={newPerson.username}
                password={newPerson.password}
                email={newPerson.email}
                phone={newPerson.phone_number}
                country={newPerson.address?.country}
                state={newPerson.address?.state}
                city={newPerson.address?.city}
                street={newPerson.address?.street_address}
                streetName={newPerson.address?.street_name}
                zip={newPerson.address?.zip_code}
            />

        </div>

    );
};

export default App;