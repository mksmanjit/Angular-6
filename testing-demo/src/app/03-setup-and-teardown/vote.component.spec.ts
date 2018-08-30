import { Component } from '@angular/core';
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalvotes when upvoted', () => {

    // Act
    component.upVote();

    // Assertion
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalvotes when downvotes', () => {

    // Act
    component.downVote();

    // Assertion
    expect(component.totalVotes).toBe(-1);
  });
});
