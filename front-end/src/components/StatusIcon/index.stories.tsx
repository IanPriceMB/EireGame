import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StatusIcon, StatusIconProps } from '.';
import { StoryWrapper } from '../../stories/wrapper';

export default {
  title: 'Battle Screen/Status Icon',
  component: StatusIcon,
} as Meta;

const Template: Story<StatusIconProps> = (args) => (
  <StoryWrapper>
    <StatusIcon {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  status: 'poison',
};
