import React, { useState } from 'react';
import { TBattleNPC, TItem } from '../../GlobalTypes';
import { TAttack, TUseItem } from '../../hooks';
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
  enemies: TBattleNPC[] | undefined,
}

export function BattleMenu({
  menuConfig,
  items,
  enemies,
}: TBattleMenuProps): JSX.Element {
  const [menuState, setMenuState] = useState('');

  const attackSelect = ():void => setMenuState('attack');
  const itemSelect = ():void => setMenuState('item');

  return (
    <div className="battle-menu">
      <div className="battle-menu__main">
        {menuConfig.attack && (
          <button
            type="button"
            className="battle-menu__button"
            onClick={attackSelect}
          >
            Attack
          </button>
        )}
        {menuConfig.defend && (
          <button
            type="button"
            className="battle-menu__button"
            onClick={menuConfig.defend.onClick}
          >
            Defend
          </button>
        )}
        {menuConfig.item && (
          <button
            type="button"
            className="battle-menu__button"
            onClick={itemSelect}
          >
            Item
          </button>
        )}
      </div>
      <div className="battle-menu__submenu">
        {/* eslint-disable-next-line no-nested-ternary */}
        {menuState === 'attack' ? (
          <ul className="attack-menu">
            {enemies?.map((enemy:TBattleNPC) => (
              <li className="attack-menu__item">
                <button
                  type="button"
                  onClick={() => menuConfig.attack?.onClick({ target: enemy })}
                  className="attack-menu__item-button"
                  id={`${enemy.name}-attack-button`}
                >
                  {enemy.name}
                </button>
              </li>
            ))}
          </ul>
        ) : menuState === 'item' ? (
          <ul className="item-menu">
            {items?.map((item:TItem) => (
              <li className="item-menu__item">
                <button
                  type="button"
                  onClick={() => menuConfig.item?.onClick({ item })}
                  className="item-menu__item-button"
                  id={`${item.name}-item-button`}
                >
                  {item.name}
                </button>
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
