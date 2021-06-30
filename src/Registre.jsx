
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Registre extends  Component{

state={
login:'',
password:'',
user:[]

}

handleChange=(event)=>{

this.setState({ [event.target.name]: event.target.value})
console.log(event.target.value)
}

handleSubmit=(event)=>{
event.preventDefault()
const obj={ login:this.state.login, password:this.state.password}
    this.setState({ user: [...this.state.user,obj]})
    console.log(this.state.user)
    }

render(){

return (

        <div classname="container">
    <form>
  <div className="mb-3">
    <label forname="exampleInputEmail1" className="form-label">Login</label>
    <input type="login" className="form-control" id="exampleInputEmail1" aria-describedby="loginHelp"
     name="login"   
     value={this.state.login}
     onChange={this.handleChange}
    />
   
  </div>
  <div className="mb-3">
    <label forName="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
         name="password"   
     value={this.state.password}
     onChange={this.handleChange}
    />
  </div>
    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Registre</button>
</form>


<ul className="list-group">

{this.state.user.map((users)=>{
    return(
    <li className="list-group-item" aria-current="true">{users.login}</li>
    )
})}
</ul>
</div>

    
)

}



}

export default Registre
