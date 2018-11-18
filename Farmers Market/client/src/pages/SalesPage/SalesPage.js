import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

/** Sales Page*/

class SalesPage extends Component {
  //Initial State
  state = {
    farmer: {},
    user: {},
    totalAmount: 0,
    cost: 0,
    message: ""

  };
  
  componentDidMount() {
    // Functions that load state
    this.loadFarmer();
    this.loadUser();
  };
//Load Farmers
  loadFarmer = () => {
    API.getFarmer(this.props.match.params.id)
      .then(res => this.setState({ farmer: res.data }))
      .catch(err => console.log(err));
  }
  //Load User
  // !!! Hard coded in local development until login page is created
  loadUser = () => {
    API.getUser("5bef5569b602381fdd026d37")
      .then(res =>
        this.setState({ user: res.data})
        // Updates State
      )
      .catch(err => console.log(err));
  };

  //Save transaction in db and save reference to users transaction history
  recordTransaction = event => {
    event.preventDefault();
    if (this.state.totalAmount > 0) {
      API.saveTransaction(this.state.user._id, {
        company: this.state.farmer.name,
        to: this.state.farmer.name,
        amount: this.state.totalAmount,
        total: this.state.cost,
        tx: this.state.farmer.ethAddress,
        synopsis: this.state.synopsis
      }).then(
        this.updateInventory()
      )
        .catch(err => console.log(err));
    }
  }

  // Update Farmers Inventory
  //!!! Currently not functional. 
  updateInventory = () => {
    const remainingInventory = this.state.farmer.inventory - this.state.totalAmount;
    console.log(remainingInventory);
    API.updateFarmer(this.state.farmer._id), {
      inventory: remainingInventory
    }

  }

  // Update current purchase amount and total cost
  updateAmount = event => {
    const { name, value } = event.target;
    if(value<= this.state.farmer.inventory) {
      const cost = this.state.farmer.price * value;
      this.setState({
        [name]: value,
        cost: cost
      });
    } else {
      this.setState({
        message: "Sorry that is too much"
      })

    }
  }
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <form style={{ paddingTop: 50}}>
          <h4> Sales Dashboard</h4>
          <h5>Current Inventor at {this.state.farmer.name}: {this.state.farmer.inventory}</h5>
          <h5>Price: {this.state.farmer.price}$</h5>
              <Input
                name="totalAmount"
                value={this.state.totalAmount}
                onChange={this.updateAmount}
                placeholder="Amount (required)"
              />
              <h5>Total Amount: {this.state.totalAmount}</h5>
              <h5>Cost: {this.state.cost}$</h5>
              <FormBtn
              onClick={this.recordTransaction}
              >
                Purchase
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6"> 
            <h1>
                {this.state.farmer.name}
              </h1>
              <h1>
                Location: {this.state.farmer.name}
              </h1>
              <h1>
                Inventory: {this.state.farmer.inventory}
              </h1>
              <h1> Price: {this.state.farmer.price}</h1>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SalesPage;
