import React, { Component } from 'react';
import { PostWrapper } from 'components/Post';
import { Route } from 'react-router-dom';
import { List, Update, Write } from 'containers/Post';


class Post extends Component {

    render () {
        return (
            <PostWrapper>
                <Route path="/post/list" component={List} />
                <Route path="/post/update" component={Update} />
                <Route path="/post/write" component={Write} />
            </PostWrapper>
        );
    }
}

export default Post;