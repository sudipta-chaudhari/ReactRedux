import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions/commentActions'
import '../App.css'

export class Comment extends Component {

    componentDidMount() {
        this.props.getAllComments();
    }

    render() {
        
        const { loading, comments, error } = this.props

        if (loading) {
            return (
                <h2>Loading Comments, please wait...</h2>
            )
        }

        if (error) {
            return (
                <h2>Error!! - {this.props.error}</h2>
            )
        }
        else {
            return (
                <ul>
                    { comments.map(el => (
                        <li key={el.id}>({el.id})&nbsp;{el.name}</li>
                    ))}
                </ul>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        comments: state.commentsRed.comments.slice(0, 20),
        loading: state.commentsRed.loading,
        error: state.commentsRed.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAllComments: () => dispatch(getComments())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);