import Head from './compnent/head/Head'
import app from './App.css'
import HeadBody from './compnent/body-head/head-body';

function App() {
  return (
    <div className="App" style={app}>
      <HeadBody/>
      <Head/>
      
    </div>
  );
}

export default App;
