import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { latestNews, otherNews } from '../../store/actions';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(latestNews())
        this.props.dispatch(otherNews())
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Home);
