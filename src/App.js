import Image from "./components/Image";
import Work from "./components/Work";

const photo = './photo.jpg';


function App() {

  return  <>
  <Image image={photo}></Image>
  <Work />
       </>
};

export default App;
