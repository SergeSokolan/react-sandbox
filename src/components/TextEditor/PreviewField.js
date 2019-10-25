import React, { PureComponent } from 'react';
import { Preview, Label, Text } from '../styles';

export class PreviewField extends PureComponent {
  render() {
    return (
      <Preview>
        <Label>Preview:</Label>
        <Text>{this.props.text}</Text>
      </Preview>
    );
  }
}
