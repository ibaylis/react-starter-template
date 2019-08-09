import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../../store/actions';

//sections
import LatestNews from './latestNews';
import OtherNews from './otherNews';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(latestNews())
        this.props.dispatch(otherNews())
    }

    render() {
        console.log(this.props)
        const articles = this.props.articles;
        return (
          <>
            <LatestNews latest={articles.latest}/>
            <OtherNews otherNews={articles.otherNews}/>
          </>
        )
      }
    }

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Home);
