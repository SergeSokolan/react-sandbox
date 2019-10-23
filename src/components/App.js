import React, { Component } from 'react';
import { Container, TextEditor } from './styles';

import { TextField } from './TextEditor/TextField';
import { PreviewBlock } from './TextEditor/PreviewBlock';
import { SendButton } from './TextEditor/SendButton';
import { Comments } from './Comments';

export default class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.previewText = this.previewText.bind(this);

    this.state = {
      previewText: '',
      comments: []
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      if (prevState.previewText.length) {
        const comments = [...prevState.comments, prevState.previewText];
        return { comments };
      }
    });
  }

  previewText(text) {
    this.setState({
      previewText: text
    });
  }

  render() {
    const { comments, previewText } = this.state;

    return (
      <Container>
        <TextEditor>
          <TextField textareaChange={this.previewText} />
          <PreviewBlock text={previewText} />
          <SendButton handleClick={this.handleClick} />
        </TextEditor>
        <Comments comments={comments} />
      </Container>
    );
  }
}
