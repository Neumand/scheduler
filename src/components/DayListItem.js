import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  const formatSpots = (spots) => {
    if (spots > 1) {
      return `${spots} spots remaining`;
    } else if (spots === 1) {
      return `${spots} spot remaining`;
    } else {
      return 'no spots remaining';
    }
  };

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className='text--regular'>{props.name}</h2>
      <h3 className='text--light'>{formatSpots(props.spots)}</h3>
    </li>
  );
}
