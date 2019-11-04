import React from 'react';
import './App.css';
import ContactForm from './ContactForm';

class App extends React.Component {
           state = {
             fields:{}
           }

           onsubmit = (fields)=>{
             this.setState({fields:fields})
           }
render(){
  return (
    <div className="App">
           <p>Reg</p>     
           <ContactForm onSubmit={this.onsubmit}/>
           <h3>{JSON.stringify(this.state.fields)}</h3>
    </div>
  );
}
}

export default App;
