import React, { Component } from 'react';

import { TabContainer, TabLIst, TabContent } from './styles';

import { Tab } from './Tab';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.ChangeContent = this.ChangeContent.bind(this);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  ChangeContent(tab) {
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
        <Tab ChangeTabContent={this.ChangeContent} label={label} key={`tab_${label}`} />
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
        <hr />
        {content}
      </TabContainer>
    );
  }
}
