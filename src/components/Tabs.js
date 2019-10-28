import React, { Component } from 'react';

import { TabContainer, TabLIst, TabContent } from './styles';

import { Tab } from './Tab';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.changeContent = this.changeContent.bind(this);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  changeContent(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {
      props: { children },
      state: { activeTab }
    } = this;

    const tabs = children.map(child => {
      const { label } = child.props;
      return (
        <Tab changeContent={this.changeContent} label={label} key={`tab_${label}`} />
      );
    });

    const content = children.map(child => {
      const { label } = child.props;
      return (
        <TabContent isActive={activeTab === label} key={`content_${label}`}>
          {child}
        </TabContent>
      );
    });

    return (
      <TabContainer>
        <TabLIst>{tabs}</TabLIst>
        {content}
      </TabContainer>
    );
  }
}
