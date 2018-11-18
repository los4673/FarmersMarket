import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

saveFarmer = event => {
  event.preventDefault();
  API.
}

class SignIn extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form style={{ paddingTop: 50 }}>
              <h4> Sign On</h4>
              <Input name="totalAmount" placeholder="Amount (required)" />
              {/* <Input
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn>Sign Up!</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SignIn;
