import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CombatCard, CombatCardProps } from '.';
import { StoryWrapper } from '../../stories/wrapper';

export default {
  title: 'Battle Screen/Combat Card',
  component: CombatCard,
} as Meta;

const Template: Story<CombatCardProps> = (args) => (
  <StoryWrapper height="500px" style={{ marginTop: '100px' }}>
    <CombatCard {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  statuses: ['poison', 'poison'],
  name: 'saoirse',
  currentHealth: 13,
  maxHealth: 20,
};
