import  features  from "./features.json";
import teamList from './teamlist.json';
import { Section } from './components/Sections/Section';
import { FeaturesList } from './components/FeatureList/FeaturesList';
import  Teamlist   from './components/TeamList/TeamList';
 
function App() {
  return (<><Section>
      <FeaturesList features= {features}/>
      </Section>
      <Section>
         <Teamlist teamList={teamList}/> 
        </Section></>
    
  );
}

export default App;
              