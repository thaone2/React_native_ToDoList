import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
  radius?: number;
}

const CicularComponent = (props: Props) => {
  const {color, value, maxValue, radius} = props;
  return (
    <CircularProgress
      value={value}
      radius={radius ?? 46}
      title={`${value}%`}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={'#3C444A'}
      titleColor={colors.text}
      titleFontSize={20}
      activeStrokeWidth={14}
      inActiveStrokeWidth={14}
      titleStyle={{
        fontFamily: fontFamilies.semiBold,
      }}
    />
  );
};

export default CicularComponent;
