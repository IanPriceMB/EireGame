import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BattlefieldRow, BattlefieldRowProps } from '.';
import { CombatCard } from '../CombatCard';
import { Characters } from '../../GlobalTypes';

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
      isEnemy={false}
      // eslint-disable-next-line no-console
      onCardSelect={() => console.log('selected')}
      identifier="saoirse"
      fullArtSrc={`${process.env.PUBLIC_URL}/images/expressions/${Characters.Mordred}/${Characters.Mordred}.png`}
    />
  </BattlefieldRow>
);

export const Default = Template.bind({});
Default.args = {
  type: 'ally',
};
