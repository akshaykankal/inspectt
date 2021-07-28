
import Navbar from "../components/Navbar"
import YoutubeVedio from '../components/YoutubeVedio';
import Work from '../components/Work';
import Advantages from '../components/Advantages';
import First from '../components/First';
import Six from '../components/Six';
import Customer from '../components/Customer';

import Seven from '../components/Seven';
import Footer from '../components/Footer';
import ContactUs from "../components/ContactUs";

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <First/>
      <Advantages/>
      <YoutubeVedio />
      <Work/>
      <Six/>
      <Seven/>
      <Customer/>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;