import React from 'react';

class ContactForm extends React.Component{
              constructor(props){
                      super(props);
                      this.initialState = {
                          name: 'god',
                          email:'',
                          city:'',
                          message:'',
                      }
                      this.state= this.initialState;

                      this.handleChange=this.handleChange.bind(this);
                      this.handleSubmit=this.handleSubmit.bind(this);
              }


              handleChange(event){
                  const name = event.target.name;
                  const value = event.target.value;
                  this.setState({
                      [name]:value
                  })
              }

              
              handleSubmit(event){
                  event.preventDefault();
                  this.props.onSubmit(this.state);
                  this.setState(this.initialState);
                  console.log(this.state);
              }

              render(){
                  return(
                      <div>
                          <h1>ContactForm</h1>
                          <form onSubmit={this.handleSubmit}>
                              <div>
                                  Name:<input type = "text" name = "name" value ={this.state.name} onChange={this.handleChange}/>
                              </div>
                              <div>
                                  Email:<input type = "text" name = "email" value ={this.state.email} onChange={this.handleChange}/>
                              </div>
                              {/* <div>
                                  <button type="submit">Submit Message</button>
                              </div> */}
                              <div>
                                  CIty:<select name = "city" value={this.state.city} onChange={this.handleChange}>
                                               <option value="">select city....</option>
                                               <option value="Banglore">bang</option>
                                               <option value="Hyderabad">hyder</option>
                                     </select>
                              </div>
                              <div>
                                  Message:<textarea name="message" value={this.state.message} onChange={this.handleChange}/>
                              </div>
                              <div>
                                  <button type="submit">Send Message</button>
                              </div>
                          </form>
                      </div>
                  )
              }
}
export default ContactForm;