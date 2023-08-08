import React from 'react';
import { Tooltip } from '@chakra-ui/react';
import numeral from 'numeral';

type NumberFormatProps = {
  value: number;
  currency?: string;
  language?: string;
};

const formatNumber = (
  value: number,
  currency: string,
  language: string
): string => {
  let format;

  switch (currency) {
    case 'USD':
      format = '0,0.00 $';
      break;
    case 'EUR':
      format = '0,0.00 €';
      break;
    // Add more cases as needed
    default:
      format = '0,0.00';
  }

  const formattedValue = numeral(value).format(format);

  // Replace punctuation marks based on language
  if (language === 'en') {
    return formattedValue.replace(/,/g, '.');
  } else if (language === 'es') {
    return formattedValue.replace(/\./g, ',');
  } else {
    return formattedValue;
  }
};

const abbreviateNumber = (
  value: number,
  language: string,
  currency?: string
): string => {
  let abbreviatedValue = numeral(value).format('0.[0]a');

  // Replace punctuation marks based on language
  if (language === 'en') {
    abbreviatedValue = abbreviatedValue.replace(/,/g, '.');
  } else if (language === 'es') {
    abbreviatedValue = abbreviatedValue.replace(/\./g, ',');
  }

  // Handle specific abbreviations
  if (abbreviatedValue.includes('K')) {
    abbreviatedValue = abbreviatedValue.replace('K', 'K');
  } else if (abbreviatedValue.includes('M')) {
    abbreviatedValue = abbreviatedValue.replace('M', 'M');
  }

  return abbreviatedValue;
};

const NumberFormat: React.FC<NumberFormatProps> = ({
  value,
  currency = '',
  language = navigator.language,
}) => {
  const formattedNumber = formatNumber(value, currency, language);
  const abbreviatedNumber = abbreviateNumber(value, language, currency);

  const handleTooltipClick = () => {
    navigator.clipboard.writeText(formattedNumber);
  };

  const tooltipStyles = {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  };

  return (
    <Tooltip
      label={formattedNumber}
      bg="cdBackground"
      color="txPrimary"
      placement="top"
    >
      <span onClick={handleTooltipClick}>
        <span style={tooltipStyles}>
          {abbreviatedNumber}
          {currency && ` ${currency}`}
        </span>
      </span>
    </Tooltip>
  );
};

export default NumberFormat;
