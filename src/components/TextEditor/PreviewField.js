import React, { PureComponent } from 'react';
import { Preview, PreviewLabel, PreviewText } from '../styles';

export class PreviewField extends PureComponent {
  render() {
    return (
      <Preview>
        <PreviewLabel>Preview:</PreviewLabel>
        <PreviewText>{this.props.text}</PreviewText>
      </Preview>
    );
  }
}
