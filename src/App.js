import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";

// function App() {
// 	return (
// 		<div className="App">
// 		</div>
// 	);
// }

class App extends Component {
	state = {};
  
	// componentDidMount() {
	//   const user = auth.getCurrentUser();
	//   this.setState({ user });
	// }
  
	render() {
	  const { user } = this.state;
  
	  return (
		<React.Fragment>
		  {/* <ToastContainer /> */}
		  <NavBar user={user} />
		  <main className="container">
			{/* <Switch>
				<Route path="/register" component={RegisterForm} />
				<Route path="/login" component={LoginForm} />
				<Route path="/logout" component={Logout} />
				<ProtectedRoute path="/movies/:id" component={MovieForm} />
				<Route
				path="/movies"
				render={props => <Movies {...props} user={this.state.user} />}
				/>
				<Route path="/customers" component={Customers} />
				<Route path="/rentals" component={Rentals} />
				<Route path="/not-found" component={NotFound} />
				<Redirect from="/" exact to="/movies" />
				<Redirect to="/not-found" />
			</Switch> */}
		  </main>
		</React.Fragment>
	  );
	}
  }

export default App;
