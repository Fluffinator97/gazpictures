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
		<div className="sqs-html-content">
			<p className="copyright">Copyright 2024</p>
		</div>
    </div>
  );
}

export default App;
