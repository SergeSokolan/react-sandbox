import React, { Component } from 'react';
import { Container, TextEditor, Section } from './styles';

import { TextField } from './TextEditor/TextField';
import { PreviewField } from './TextEditor/PreviewField';
import { SendButton } from './TextEditor/SendButton';
import { Comments } from './Comments';
import { Tabs } from './Tabs';
import { SortFilms } from './SortFilms';
import { TodoList } from './TodoList';

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
  };

  previewText(text) {
    this.setState({
      previewText: text
    });
  }

  render() {
    const { comments, previewText } = this.state;

    return (
      <Container>
        <Tabs>
          <Section label='Comments'>
            <TextEditor>
              <TextField textareaChange={this.previewText} />
              <PreviewField text={previewText} />
              <SendButton handleClick={this.handleClick} />
            </TextEditor>
            <Comments comments={comments} />
          </Section>

          <Section label='Sort films'>
            <SortFilms />
          </Section>

          <Section label='TODO'><TodoList /></Section>
        </Tabs>
      </Container>
    );
  }
}
