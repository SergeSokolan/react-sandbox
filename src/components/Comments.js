import React, { Component } from 'react';
import { Comment, CommentLabel, CommentText } from './styles';

export class Comments extends Component {
  render() {
    const comments = this.props.comments.map( (comment, index) => {
      return (
        <Comment key={index}>
          <CommentLabel>your comment:</CommentLabel>
          <CommentText>{comment}</CommentText>
        </Comment>
      );
    });

    return <div>{comments}</div>;
  }
}
