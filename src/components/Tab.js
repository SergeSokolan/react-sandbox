import React, { PureComponent } from 'react';

import { Button } from './styles';

export class Tab extends PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { changeContent, label } = this.props;
    changeContent(label);
  }

  render() {
    return (
      <Button onClick={this.handleChange} kind='tab'>
        {this.props.label}
      </Button>
    );
  }
}
