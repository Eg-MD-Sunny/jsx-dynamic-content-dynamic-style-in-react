import logo from './logo.svg';
import './App.css';

function App() {
{/*React Dynamic Style Start*/}  
    let style = {
        color: 'red',
    }
{/*React Dynamic Style End*/}    

{/*Variable Decleare [Start]*/}
    let name = "Dr. Nila Naim";
{/*Variable Decleare [End]*/}

{/*Object Decleare [Start]*/}
    let person = {
        name: 'Dr. Mahfuz',
        job: 'Singer'
    }
    let person2 = {
        name: 'Eva Rahman',
        job: 'Singer'
    }
{/*Object Decleare [End]*/}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>

      {/*Dynamic Data Show Start*/}  
        <p>Object name is: {person.name}</p>
        <p>Object job is: {person.job}</p>
        <p style={style}>Object name is: {person2.name + " " + person2.job}</p>
      {/*Dynamic Data Show End*/}  

    {/*Dynamic Content Start*/}
        <h1>Doner Name is: {name}</h1>        
        <h1>My Heading</h1>
        <h2>Additional Value: {2+3}</h2>
        <h2>2nd Additional Value: {(2+5)*25+65}</h2>
        <p>My First React Paragraph</p>
    {/*Dynamic Content End*/}  
      </header>
    </div>
  );
}

export default App;
