import React, { useState } from 'react';
import { TEnemy, TItem } from '../../GlobalTypes';
import { TAttack, TUseItem } from '../../hooks';
import { Button } from '../Button';
import './index.scss';

export type TBattleMenuProps = {
  menuConfig: {
    attack?: {
      onClick: ({ target }: TAttack) => void,
    },
    defend?: {
      onClick: () => void
    },
    item?: {
      onClick:({ item }: TUseItem) => void
    },
  },
  items: TItem[] | undefined,
  enemies: TEnemy[] | undefined,
}

export function BattleMenu({
  menuConfig,
  items,
  enemies,
}: TBattleMenuProps) {
  const [menuState, setMenuState] = useState('');

  const attackSelect = () => setMenuState('attack');
  const itemSelect = () => setMenuState('item');

  return (
    <div className="battle-menu">
      <div className="battle-menu__main">
        {menuConfig.attack && (
          <Button
            type="button"
            className="battle-menu__button"
            onClick={attackSelect}
          >
            Attack
          </Button>
        )}
        {menuConfig.defend && (
          <Button
            type="button"
            className="battle-menu__button"
            onClick={menuConfig.defend.onClick}
          >
            Defend
          </Button>
        )}
        {menuConfig.item && (
          <Button
            type="button"
            className="battle-menu__button"
            onClick={itemSelect}
          >
            Item
          </Button>
        )}
      </div>
      <div className="battle-menu__submenu">
        {/* eslint-disable-next-line no-nested-ternary */}
        {menuState === 'attack' ? (
          <ul className="attack-menu">
            {enemies?.map((enemy:TEnemy) => (
              <li className="attack-menu__item">
                <Button
                  onClick={() => menuConfig.attack?.onClick({ target: enemy })}
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
            {items?.map((item:TItem) => (
              <li className="item-menu__item">
                <Button
                  onClick={() => menuConfig.item?.onClick({ item })}
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
