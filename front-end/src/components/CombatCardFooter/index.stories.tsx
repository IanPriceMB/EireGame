import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CombatCardFooter } from '.';
import { StoryWrapper } from '../../stories/wrapper';
import { CombatAction } from '../../GlobalTypes';

export default {
  title: 'Battle Screen/Combat Card Footer',
  component: CombatCardFooter,
} as Meta;

const Template: Story<CombatAction> = (args) => (
  <StoryWrapper width="400px" height={400} style={{ position: 'relative' }}>
    <CombatCardFooter {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  name: 'artemis',
  handleClick: () => console.log('attack'),
};
