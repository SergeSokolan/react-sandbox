import React, { Component } from 'react';
import { Comment, CommentList, Label, Text } from './styles';

export class Comments extends Component {
  render() {
    const comments = this.props.comments.map( (comment, index) => {
      return (
        <Comment key={index}>
          <Label>your comment:</Label>
          <Text>{comment}</Text>
        </Comment>
      );
    });

    return <CommentList>{comments}</CommentList>;
  }
}
