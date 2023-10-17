import Image from "./components/Image";
import WorkExperience from "./components/WorkExperience";
import { useState } from "react";
import Form from "./components/Form";
import Repo from "./components/Repo";

const photo = './photo.jpg';

const initialState = [

  {
  
  title: "Senior Cabin Crew",
  
  name: "Ukraine International Airlines",
  
  description:
  
  "Provide safety and comfort of guests on board, ensure that all crew members are providing the highest standard of safety and service on board, responsible for the procurement and management of air food and cabin supplies.",
  
  link: "https://www.flyuia.com/ua/en/home",
  
  },
  
  {
  
  title: "Patient service department manager",
  
  name: "American Medical Centers",
  
  description:
  
  "Provide customers the information of the medical services cost, billing service, scheduling appointments.",
  
  link: "https://amcenters.com/",
  
  },
  
  {
  
  title: "Reservation manager",
  
  name: "Hotel Lybid Kyiv",
  
  description:
  
  "Providing travel information, availabilities of hotel accomodations and prices, handling customer complaints or concerns, making reservations and sending out confirmation notices.",
  
  link: "https://lybid-hotel.phnr.com/",
  
  },
  
  ]

function App() {

  const [ data, setData ] = useState(initialState);
  function addWorkExperience(newData) {
    setData ([...data, newData]);
  }

  return  <>
            <Image image={photo} />
            <WorkExperience data={data} />
            <Form onAddItem={addWorkExperience} />
            <Repo />
       </>
};

export default App;
