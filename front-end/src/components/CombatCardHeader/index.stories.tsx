import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CombatCardHeader, CombatCardHeaderProps } from '.';
import { StoryWrapper } from '../../stories/wrapper';

export default {
  title: 'Battle Screen/Combat Card Header',
  component: CombatCardHeader,
} as Meta;

const Template: Story<CombatCardHeaderProps> = (args) => (
  <StoryWrapper width="400px" height={400} style={{ position: 'relative', marginTop: 100 }}>
    <CombatCardHeader {...args} />
  </StoryWrapper>
);
export const Default = Template.bind({});
Default.args = {
  name: 'artemis',
  currentHealth: 10,
  maxHealth: 10,
};
