import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StatusBar, StatusBarProps } from '.';
import { StoryWrapper } from '../../stories/wrapper';

export default {
  title: 'Battle Screen/Status Bar',
  component: StatusBar,
} as Meta;

const Template: Story<StatusBarProps> = (args) => (
  <StoryWrapper width="400px" height={400} style={{ position: 'relative', marginTop: 100 }}>
    <StatusBar {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  statuses: ['poison', 'poison', 'poison'],
};
