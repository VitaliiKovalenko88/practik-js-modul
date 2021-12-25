import  features  from "./features.json";
import {Section} from './components/Sections/Section'
import {FeaturesList} from './components/FeatureList/FeaturesList'

 
function App() {
  return (
    <Section><FeaturesList features= {features}/></Section>
  );
}

export default App;
