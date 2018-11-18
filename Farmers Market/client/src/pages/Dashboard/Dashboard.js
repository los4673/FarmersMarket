import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Dashboard extends Component {
  //Initial state
  state = {
    farmers: [],
    user: [],
    transactions: [],
    title: "",
    author: "",
    synopsis: ""
  };
  // Load data in variables once component is attached to DOM
  componentDidMount() {
    this.loadFarmers();
    this.loadUser();
  }

  // Load farmers function
  loadFarmers = () => {
    API.getFarmers()
      .then(
        res =>
          this.setState({
            farmers: res.data,
            title: "",
            author: "",
            synopsis: ""
          }) // Updates State
      )
      .then(console.log(this.state.farmers))
      .catch(err => console.log(err));
  };

  // Hard coded in local enviorement until sign in page is created 
  loadUser = () => {
    API.getUser("5bef5569b602381fdd026d37")
      .then(
        res =>
          this.setState({
            user: res.data,
            transactions: res.data.transactions,
            title: "",
            author: "",
            synopsis: ""
          })
        // Updates State
      )
      .then(console.log(this.state.user))
      .catch(err => console.log(err));
  };

  // Saving Function for future development 
  // deleteFarmer = id => {
  //   API.deleteFarmer(id)
  //     .then(res => this.loadFarmers())
  //     .catch(err => console.log(err));
  // };

  // Update state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                Welcome back{" "}
                {this.state.user.firstName + " " + this.state.user.lastName} !
              </h1>
              <p>
                You can find farmers to purchase from and all of your sales
                transactions here.
              </p>
            </Jumbotron>
            {this.state.transactions.length ? (
              <List>
                <h2>Transaction History</h2>
                {this.state.transactions.map(transaction => (
                  <ListItem key={transaction._id}>
                    <h6>
                      Transaction to: {transaction.to} for a total amount of{" "}
                      {transaction.amount}$
                    </h6>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            {this.state.farmers.length ? (
              <List>
                <h1>Farmers Market</h1>
                {this.state.farmers.map(farmer => (
                  <ListItem key={farmer._id}>
                    <Link to={"/farmers/" + farmer._id}>
                      <strong>
                        {farmer.name} by {farmer.location}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
