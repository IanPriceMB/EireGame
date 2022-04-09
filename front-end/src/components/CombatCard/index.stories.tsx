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
  enchantments: [
    {
      name: 'enchantment',
      id: 'id',
      onClick: () => console.log('enchantment'),
      image: '/icons/enchantment.svg',
      apCost: 1,
    },
  ],
  abilities: [
    {
      name: 'ability',
      id: 'id',
      onClick: () => console.log('ability'),
      image: '/icons/ability.svg',
      apCost: 1,
    },
  ],
  tinctures: [
    {
      name: 'tincture',
      id: 'id',
      onClick: () => console.log('tincture'),
      image: '/icons/tincture.svg',
      apCost: 1,
      remainingUses: 3,
    },
  ],
  handleAttack: () => console.log('attack'),
};
