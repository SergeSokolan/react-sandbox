import React, { PureComponent } from 'react'

import { Button } from './styles'

export class SortButton extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { label, changeSortOnClick } = this.props;
    changeSortOnClick(label);
  }

  render() {
    return <Button onClick={this.handleClick} kind='sort'>{this.props.label}</Button>;
  }
}
