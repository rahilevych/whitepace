import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { ProjectManagment } from './components/project-managment/ProjectManagment';
import { WorkTogether } from './components/work-together/WorkTogether';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Hero />
        <ProjectManagment />
        <WorkTogether />
      </main>
    </div>
  );
}

export default App;
