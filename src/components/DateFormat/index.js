import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import { TextDate } from './styles';

export default function DateFormat({ date, ...rest }) {
  const [dateFormated, setDateFormated] = useState('');

  useEffect(() => {
    !date
      ? setDateFormated('- - / - - / - -')
      : setDateFormated(format(parseISO(date), 'dd/MM/YYY'));
  }, [date]);

  return <TextDate {...rest}>{dateFormated}</TextDate>;
}
