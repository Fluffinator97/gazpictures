import './Style.css';
import Meny from './Modules/Meny.js';
import Banner from './Modules/Banner.js';
import Portfolio from './Modules/Portfolio.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Meny />
		<Banner />
	</header>
	<Portfolio />
    </div>
  );
}

export default App;
