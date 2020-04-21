import React from 'react';
import 'components/InterviewListItem.scss';
import classnames from 'classnames';

export default function InterviewerListItem(props) {
  // TODO: W07D2: Listing Interviewers I - we need to showcase what the components should look like at the end of the activity.
  const interviewerClass = classnames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });

  return (
    <li
      onClick={props.setInterviewer} // TODO: props.setInterviewer(props.id) does NOT work. Why?
      className={interviewerClass}>
      <img
        className='interviewers__item-image'
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
