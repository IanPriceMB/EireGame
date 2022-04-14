/* eslint-disable no-console */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CombatButton, CombatButtonProps } from '.';
import { StoryWrapper } from '../../stories/wrapper';

export default {
  title: 'Battle Screen/Combat Button',
  component: CombatButton,
} as Meta;

const Template: Story<CombatButtonProps> = (args) => (
  <StoryWrapper height="400px">
    <CombatButton {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  name: 'attack',
  id: 'id',
  onClick: () => console.log('clicked'),
  image: '/icons/meleeAttack.svg',
  remainingUses: 5,
  apCost: 1,
};

export const NoRemaining = Template.bind({});
NoRemaining.args = {
  name: 'attack',
  id: 'id',
  onClick: () => console.log('clicked'),
  image: '/icons/meleeAttack.svg',
  apCost: 1,
};

export const NoAp = Template.bind({});
NoAp.args = {
  name: 'attack',
  id: 'id',
  onClick: () => console.log('clicked'),
  image: '/icons/meleeAttack.svg',
  remainingUses: 5,
};
