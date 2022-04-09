import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CombatCardFooter, CombatCardFooterProps } from '.';
import { StoryWrapper } from '../../stories/wrapper';

export default {
  title: 'Battle Screen/Combat Card Footer',
  component: CombatCardFooter,
} as Meta;

const Template: Story<CombatCardFooterProps> = (args) => (
  <StoryWrapper width="400px" height={400} style={{ position: 'relative' }}>
    <CombatCardFooter {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  name: 'artemis',
  handleAttack: () => console.log('attack'),
  enchantments: [{
    name: 'enchantment',
    id: 'artemis-enchantment',
    onClick: () => undefined,
    image: `${process.env.PUBLIC_URL}/icons/enchantment.svg`,
    apCost: 1,
  }],
  abilities: [{
    name: 'ability',
    id: 'artemis-ability',
    onClick: () => undefined,
    image: `${process.env.PUBLIC_URL}/icons/ability.svg`,
    apCost: 1,
  }],
  tinctures: [{
    name: 'tincture',
    id: 'artemis-tincture',
    onClick: () => undefined,
    image: `${process.env.PUBLIC_URL}/icons/tincture.svg`,
    remainingUses: 3,
    apCost: 1,
  }],
};
