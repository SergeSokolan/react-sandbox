import React, { PureComponent } from 'react';

import { Button } from './styles';

export class Tab extends PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { ChangeTabContent, label } = this.props;
    ChangeTabContent(label);
  }

  render() {
    return (
      <Button onClick={this.handleChange} color='blue' kind='tab'>
        {this.props.label}
      </Button>
    );
  }
}
