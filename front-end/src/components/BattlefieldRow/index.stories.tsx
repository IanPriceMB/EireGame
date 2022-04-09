import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BattlefieldRow, BattlefieldRowProps, RowType } from '.';
import { CombatCard } from '../CombatCard';

export default {
  title: 'Battle Screen/Battlefield Row',
  component: BattlefieldRow,
} as Meta;

const Template: Story<BattlefieldRowProps> = (args) => (
  <BattlefieldRow {...args}>
    <CombatCard
      statuses={['poison', 'poison']}
      name="saoirse"
      currentHealth={13}
      maxHealth={20}
      enchantments={[
        {
          name: 'enchantment',
          id: 'id',
          onClick: () => console.log('enchantment'),
          image: '/icons/enchantment.svg',
          apCost: 1,
        },
      ]}
      abilities={[
        {
          name: 'ability',
          id: 'id',
          onClick: () => console.log('ability'),
          image: '/icons/ability.svg',
          apCost: 1,
        },
      ]}
      tinctures={[
        {
          name: 'tincture',
          id: 'id',
          onClick: () => console.log('tincture'),
          image: '/icons/tincture.svg',
          apCost: 1,
          remainingUses: 3,
        },
      ]}
      handleAttack={() => console.log('attack')}
      onCardSelect={() => console.log('selected')}
    />
  </BattlefieldRow>
);

export const Default = Template.bind({});
Default.args = {
  type: 'ally',
};
