import Image from "./components/Image";
import WorkExperience from "./components/WorkExperience";

const photo = './photo.jpg';


function App() {

  return  <>
  <Image image={photo}></Image>
  <WorkExperience />
       </>
};

export default App;
