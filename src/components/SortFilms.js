import React, { Component } from 'react';

import { SortButton } from './SortButton';
import { SortFilmsContainer, Text, Label, ContentBlock } from './styles';

import { data } from '../data';

export class SortFilms extends Component {
  constructor() {
    super();
    this.changeSort = this.changeSort.bind(this);

    this.state = data;
  }

  changeSort = kind => {
    this.setState(prevState => {
      return {
        currentSorting: kind,
        movies: prevState.movies.sort(function(prevObj, nextObj) {
          if (typeof prevObj[kind] === 'string') {
            return prevObj[kind] > nextObj[kind]
              ? 1
              : prevObj[kind] < nextObj[kind]
              ? -1
              : 0;
          }
          return nextObj[kind] - prevObj[kind];
        })
      };
    });
  };

  render() {
    const { currentSorting, movies } = this.state;

    const films = movies.map((film, index) => {
      return <Text key={`${film.title}_${index}`}>{film.title}</Text>;
    });

    return (
      <SortFilmsContainer>
        <Label>sort by: {currentSorting}</Label>
        <SortButton changeSortOnClick={this.changeSort} label={'title'} />
        <SortButton changeSortOnClick={this.changeSort} label={'year'} />
        <SortButton changeSortOnClick={this.changeSort} label={'rating'} />
        <ContentBlock>{films}</ContentBlock>
      </SortFilmsContainer>
    );
  }
}
