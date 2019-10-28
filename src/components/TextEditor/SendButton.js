import React, { PureComponent } from 'react';
import { Button } from '../styles';

export class SendButton extends PureComponent {
  render() {
    return (
      <Button onClick={this.props.handleClick} kind={'submit'}>Send</Button>
    );
  }
}
