import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { parseISO, format } from 'date-fns';

export default function DateFormat({ date, ...rest }) {
  const [dateFormated, setDateFormated] = useState('');

  useEffect(() => {
    !date
      ? setDateFormated('- - / - - / - -')
      : setDateFormated(format(parseISO(date), 'dd/MM/YYY'));
  }, [date]);

  return <Text {...rest}>{dateFormated}</Text>;
}
