import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import http from "./services/httpService";
import config from "./config.json";
import Table from "./components/table";
import Pagination from "./components/pagination";
import "bootstrap/dist/css/bootstrap.css";
import User from "./components/user";
import Commit from "./components/commit";
import { Route, Switch, Redirect } from "react-router-dom";

class History extends Component {
  state = {
    commits: [],
    totalCommits: 0,
    currentPage: 1,
    currentCommits: [],
    fetchedData: [],
    showuser: false,
    userData: [],
  };

  async componentDidMount() {
    const { data } = await http.get(
      config.apiEndpoint + "?page=" + this.state.currentPage
    );
    this.setState({
      commits: data,
      totalCommits: data.length,
      fetchedData: this.state.fetchedData.concat(data),
    });
  }

  changePage = async (prevCommits, page) => {
    console.log("Next page");
    console.log(page);
    const { data } = await http.get(config.apiEndpoint + "?page=" + page);
    this.setState({
      fetchedData: prevCommits,
      commits: data,
      totalCommits: data.length,
      currentPage: page,
    });
  };

  prevPage = (prevCommits, page) => {
    console.log("Prev page");
    console.log(page - 1);
    let prevData = prevCommits[page];

    //console.log(prevCommits[page - 1]);
    this.setState({
      commits: prevCommits,
      totalCommits: prevCommits.length,
      currentPage: page - 1,
    });
  };

  showUserData = (commitItem) => {
    this.setState({
      showuser: true,
      userData: commitItem,
    });
  };

  hideUserData = () => {
    this.setState({
      showuser: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Commit History
          </a>
        </nav>
        <Switch>
          <Route path="/commits" component={Commit} />
        </Switch>
        <Table
          commits={this.state.commits}
          currentPage={this.state.currentPage}
          show={this.state.show}
          commitPerPage={this.state.totalCommits}
          showUserData={this.showUserData}
        ></Table>
        <Pagination
          prevCommits={this.state.fetchedData}
          commitCount={this.state.totalCommits}
          onPageChange={this.changePage}
          currentPage={this.state.currentPage}
          onPrevPage={this.prevPage}
        ></Pagination>
        <User
          show={this.state.showuser}
          hideModal={this.hideUserData}
          user={this.state.userData}
        ></User>
      </React.Fragment>
    );
  }
}

export default History;
