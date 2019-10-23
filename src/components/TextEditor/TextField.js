import React, { PureComponent } from 'react';
import { Textarea } from '../styles';

export class TextField extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { value } = event.currentTarget;
    this.props.textareaChange(value);
  }
  render() {
    return <Textarea onChange={this.handleChange} placeholder='Enter text' />;
  }
}
