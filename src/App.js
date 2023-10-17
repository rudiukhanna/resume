import Image from "./components/Image";
import Counter from "./components/Counter";
const photo = './photo.jpg';


function App() {

  return  <>
  <Image image={photo}></Image>
  <Counter/>
       </>
};

export default App;
