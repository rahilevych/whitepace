import { Customize } from './components/customize/Customize';
import { Data } from './components/data-section/Data';
import { Fav } from './components/fav/Fav';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { PlansSection } from './components/plans-section/PlansSection';
import { ProjectManagment } from './components/project-managment/ProjectManagment';
import { SponsorsMarquee } from './components/sponsor/SponsorMarquee';
import { UseExtension } from './components/use-as-extension/UseExtension';
import { WorkEverywhere } from './components/work-everywhere/WorkEverywhere';
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
        <WorkEverywhere />
        <Data />
        <SponsorsMarquee />
        <Fav />
      </main>
    </div>
  );
}

export default App;
