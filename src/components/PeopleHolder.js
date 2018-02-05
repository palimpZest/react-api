import React, { Component } from "react";
import Axios from "axios";
import PeopleItem from "./PeopleItem";
import { Row } from "antd";

class PeopleHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
  Axios.get("https://swapi.co/api/people/?page=1")
    .then(response => {
      this.setState({ items: response.data.results, loading: false });
      console.log(response.data.results);
    })
    .catch(function(error) {
      console.log("error");
    });
  }


  render() {
    let list;

    if (this.state.loading) {
      list = (
        <div>
          <img
            className="loading-icon"
            src="https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif"
            alt="loading icon"
          />
        </div>
      );
    } else {
      list = this.state.items.map((item, index) => {
        return (
            <PeopleItem
              key={index}
              name={item.name}
              birth_year={item.birth_year}
              gender={item.gender}
              height={item.height}
              mass={item.mass}
            />
        );
      });
    }
    return <Row>{list}</Row>;
  }
}

export default PeopleHolder;
