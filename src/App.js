import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import http from "./services/httpService";
import config from "./config.json";
import Table from "./components/table";
import Pagination from "./components/pagination";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    commits: [],
    totalCommits: 0,
    currentPage: 1,
    currentCommits: [],
  };

  async componentDidMount() {
    const { data: commits } = await http.get(
      config.apiEndpoint + "?page=" + this.state.currentPage
    );
    this.setState({
      commits,
      totalCommits: commits.length,
    });
  }

  changePage = async (page) => {
    const { data } = await http.get(config.apiEndpoint + "?page=" + page);
    this.setState({
      commits: data,
      totalCommits: data.length,
      currentPage: page,
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
        <Table
          commits={this.state.commits}
          currentPage={this.state.currentPage}
          show={this.state.show}
          commitPerPage={this.state.totalCommits}
        ></Table>
        <Pagination
          commitCount={this.state.totalCommits}
          onPageChange={this.changePage}
          currentPage={this.state.currentPage}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default App;
