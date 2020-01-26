import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postActions'
import '../App.css'

export class Post extends Component {

    componentDidMount() {
        this.props.getAllPosts();
    }

    render() {
        
        const { loading, posts, error } = this.props

        if (loading) {
            return (
                <h2>Loading Posts, please wait...</h2>
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
                    {posts.map(el => (
                        <li key={el.id}>({el.id})&nbsp;{el.title}</li>
                    ))}
                </ul>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsRed.posts.slice(0, 20),
        loading: state.postsRed.loading,
        error: state.postsRed.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: () => dispatch(getPosts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);