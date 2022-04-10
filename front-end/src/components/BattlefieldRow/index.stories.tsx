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
      handleAttack={() => console.log('attack')}
      onCardSelect={() => console.log('selected')}
      key="saoirse"
    />
  </BattlefieldRow>
);

export const Default = Template.bind({});
Default.args = {
  type: 'ally',
};
