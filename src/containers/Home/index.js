import React, {Component} from 'react';
import Form from '../../components/Form'
import Header from '../../components/Header'
class Home extends Component {

  render() {

    return (
      <div className="home mt-5">
        <Header />
        <Form />
      </div>
    )
  }
}

export default Home;
