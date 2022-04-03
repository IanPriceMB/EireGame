import React, { useState } from 'react';
import { TEnemy, TItem } from '../../GlobalTypes';
import { THandleAttack, THandleItem } from '../../hooks';
import { Button } from '../Button';
import './index.scss';

export type TBattleMenuProps = {
  handleAttack: ({ enemy }: THandleAttack) => void,
  handleDefend: () => void,
  handleItem: ({ item }: THandleItem) => void,
  items: TItem[] | undefined
  enemies: TEnemy[] | undefined
}

export function BattleMenu({
  handleAttack,
  handleDefend,
  handleItem,
  items,
  enemies,
}: TBattleMenuProps) {
  const [menuState, setMenuState] = useState('');

  const attackSelect = () => setMenuState('attack');
  const itemSelect = () => setMenuState('item');

  return (
    <div className="battle-menu">
      <div className="battle-menu__main">
        <Button
          type="button"
          className="battle-menu__button"
          onClick={attackSelect}
        >
          Attack
        </Button>
        <Button
          type="button"
          className="battle-menu__button"
          onClick={handleDefend}
        >
          Defend
        </Button>
        <Button
          type="button"
          className="battle-menu__button"
          onClick={itemSelect}
        >
          Item
        </Button>
      </div>
      <div className="battle-menu__submenu">
        {/* eslint-disable-next-line no-nested-ternary */}
        {menuState === 'attack' ? (
          <ul className="attack-menu">
            {enemies?.map((enemy) => (
              <li className="attack-menu__item">
                <Button
                  onClick={() => handleAttack({ enemy })}
                  className="attack-menu__item-button"
                  id={`${enemy.name}-attack-button`}
                >
                  {enemy.name}
                </Button>
              </li>
            ))}
          </ul>
        ) : menuState === 'item' ? (
          <ul className="item-menu">
            {items?.map((item) => (
              <li className="item-menu__item">
                <Button
                  onClick={() => handleItem({ item })}
                  className="item-menu__item-button"
                  id={`${item.name}-item-button`}
                >
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          null
        )}
      </div>
    </div>
  );
}
