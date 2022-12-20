import './App.css';

import { OverviewChart }  from './OverviewChart';

import { StatusCardsList } from './StatusCards';

import { ColoredCardsList } from './ColoredCards';

import { ProjectsList }  from './Projects';


function App() {

  return (

    <div className="App">

            <h2 className="title">Search 🔍</h2>

            <h1 className='title'>Dashboard</h1>

           
          <StatusCardsList />
          <OverviewChart />
          <ProjectsList />
          <ColoredCardsList />
      
    </div>

   ) ;
  }


export default App;
