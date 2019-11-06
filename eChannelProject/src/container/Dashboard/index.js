import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
  Dropdown,
  DropdownButton,
  InputGroup,
  Button,
  Form,
  FormControl,
  Navbar,
  Row,
  Col,
  Container,
  Card,
  Accordion,
  Table
} from "react-bootstrap";
import ReactTable from "react-table";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { Container, Col, Row, Button } from "reactstrap";
import { getRow, fetchTicketData } from "../../actions/dashboard";
import "react-table/react-table.css";
import "./styles.scss";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketData: props.data,
      products: [
        {
          id: 1,
          name: "TV",
          price: 1000
        },
        {
          id: 2,
          name: "Mobile",
          price: 500
        },
        {
          id: 3,
          name: "Book",
          price: 20
        }
      ],
      columns: [
        {
          dataField: "id",
          text: "Product ID"
        },
        {
          dataField: "name",
          text: "Product Name"
        },
        {
          dataField: "price",
          text: "Product Price",
          sort: true
        }
      ]
    };
  }

  // componentWillMount() {
  //   this.props.fetchTicketData();
  // }

  // handleRow = row => {
  //   console.log(row);
  //   this.props.history.push("/ticketDetails");
  //   this.props.getRow(row.original);
  // };

  // addTicket = () => {
  //   this.props.history.push("/addDetails");
  // };

  render() {
    return (
      <Container-fluid>
        <Navbar className="navbar">
          <Navbar.Brand href="#home" className="navbar-brand">
            <h1>eChannel Dashboard</h1>
          </Navbar.Brand>
          <Form className="text-white ml-auto">
            <div className="user-info">Welcome dantde1 | logout</div>
            <div className="helpTag">Help File</div>
          </Form>
        </Navbar>
        <Container>
          <h2 className="isolate-title">Contact Center Search</h2>
        </Container>
        <div>
          <div className="clearfix mx-5 my-4">
            <Button variant="outline-secondary float-right">Export</Button>
          </div>
        </div>
        <div>
          <Row className="text-center m-1">
            <Col className="form-block-1">
              <Row>
                <Col className="col-4 text-right px-2">RealTime ID: RT</Col>
                <Col className="col-6 px-0">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">Keywords:</Col>
                <Col className="col-3 px-0">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
                <Col className="col-3 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    variant="secondary"
                    size="sm"
                    title="Exact Phrase"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">Skills:</Col>
                <Col className="col-6 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    variant="secondary"
                    size="sm"
                    title="All Skills"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">MDN:</Col>
                <Col className="col-6 px-0">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <small>
                *MDN search is available in two hours after chat ends
              </small>
              <Row>
                <Col className="col-4 text-right px-2">Transferred :</Col>
                <Col className="col-8 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    className="float-left"
                    variant="secondary"
                    size="sm"
                    title="&nbsp;&nbsp;"
                  >
                    <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">No</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">
                  Transfer Origination :
                </Col>
                <Col className="col-8 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    variant="secondary"
                    size="sm"
                    title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
            <Col className="form-block-1">
              <small>
                *Default search start/end time is <span>6</span> Months from
                yesterday
              </small>
              <Row>
                <Col>
                  <Button variant="danger" className="float-right" size="sm">
                    Submit
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="outline-dark"
                    className="float-left"
                    size="sm"
                  >
                    Reset
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col className="form-block-1">
              <Row>
                <Col className="col-4 text-right px-2">Sup First/Last:</Col>
                <Col className="col-3 px-0">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
                <Col className="col-3 px-0">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col className="col-4 text-right px-2">Operator:</Col>
                <Col className="col-6 px-0">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <small>*Usage: Last name, first name, employee id</small>
              <Row>
                <Col className="col-4 text-right px-2">Business Unit:</Col>
                <Col className="col-6 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="All"
                    variant="secondary"
                    size="sm"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">Contact Center:</Col>
                <Col className="col-6 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="All"
                    variant="secondary"
                    size="sm"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">Locations:</Col>
                <Col className="col-6 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="All"
                    variant="secondary"
                    size="sm"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row>
                <Col className="col-4 text-right px-2">Device Type:</Col>
                <Col className="col-8 px-0">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="All"
                    variant="secondary"
                    size="sm"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header className="p-0">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <span>Advanced Options</span>
                  <span className="float-right">cherverlet-down</span>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div>
                    <Row>
                      <Col className="col-3">
                        <Row>
                          <Col className="text-right px-2">
                            Exit Survey Present:
                          </Col>
                          <Col className="text-left p-0">
                            <DropdownButton
                              id="dropdown-basic-button"
                              variant="secondary"
                              size="sm"
                              title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                            >
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
                            </DropdownButton>
                            <p></p>
                            <p></p>
                            <p></p>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="col-4">
                        <div className="advOptions-List-inline">
                          <ul>
                            <li>NPS:</li>
                            <li>
                              <DropdownButton
                                id="dropdown-basic-button"
                                variant="secondary"
                                size="sm"
                                title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                              >
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </DropdownButton>
                            </li>
                            <li>to</li>
                            <li>
                              <DropdownButton
                                id="dropdown-basic-button"
                                variant="secondary"
                                size="sm"
                                title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                              >
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </DropdownButton>
                            </li>
                          </ul>
                        </div>
                        <div className="advOptions-List-inline">
                          <ul>
                            <li>ERP/Customer Choice:</li>
                            <li>
                              <DropdownButton
                                id="dropdown-basic-button"
                                variant="secondary"
                                size="sm"
                                title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                              >
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </DropdownButton>
                              <p></p>
                              <p></p>
                              <p></p>
                            </li>
                            <li>to</li>
                            <li>
                              <DropdownButton
                                id="dropdown-basic-button"
                                variant="secondary"
                                size="sm"
                                title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                              >
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </DropdownButton>
                              <p></p>
                              <p></p>
                              <p></p>
                            </li>
                          </ul>
                        </div>
                        <div className="advOptions-List-inline">
                          <ul>
                            <li>DRR/Ownership:</li>
                            <li>
                              <DropdownButton
                                id="dropdown-basic-button"
                                variant="secondary"
                                size="sm"
                                title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                              >
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </DropdownButton>
                              <p></p>
                              <p></p>
                              <p></p>
                            </li>
                            <li>to</li>
                            <li>
                              <DropdownButton
                                id="dropdown-basic-button"
                                variant="secondary"
                                size="sm"
                                title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                              >
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </DropdownButton>
                              <p></p>
                              <p></p>
                              <p></p>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card></Card>
          </Accordion>
        </div>
        <div>
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.products}
            columns={this.state.columns}
          />
        </div>
      </Container-fluid>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     data: state.dashboard.ticketData
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ getRow, fetchTicketData }, dispatch);
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DashBoard);

export default DashBoard;
