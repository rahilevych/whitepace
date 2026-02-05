import { Customize } from './components/customize/Customize';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { PlansSection } from './components/plans-section/PlansSection';
import { ProjectManagment } from './components/project-managment/ProjectManagment';
import { UseExtension } from './components/use-as-extension/UseExtension';
import { WorkTogether } from './components/work-together/WorkTogether';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Hero />
        <ProjectManagment />
        <WorkTogether />
        <UseExtension />
        <Customize />
        <PlansSection />
      </main>
    </div>
  );
}

export default App;
