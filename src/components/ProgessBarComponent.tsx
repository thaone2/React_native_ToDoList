import React from 'react';
import {DimensionValue, View} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
  size?: 'small' | 'normal' | 'large';
  color?: string;
  percent: DimensionValue;
}

const ProgessBarComponent = (props: Props) => {
  const {size, color, percent} = props;
  const heightContent = size === 'small' ? 6 : size === 'large' ? 10 : 8;
  return (
    <View style={{marginTop: 12, marginBottom: 16}}>
      <View
        style={{
          height: heightContent,
          width: '100%',
          backgroundColor: 'rgba(0,0,0, 0.3)',
          borderRadius: 100,
        }}>
        <View
          style={{
            backgroundColor: color ?? colors.blue,
            width: percent,
            height: heightContent,
            borderRadius: 100,
          }}
        />
      </View>
      <RowComponent styles={{justifyContent: 'space-between', marginTop: 4}}>
        <TextComponent text="Progess" size={12} />
        <TextComponent
          font={fontFamilies.bold}
          text={`${percent}`}
          size={12}
          flex={0}
        />
      </RowComponent>
    </View>
  );
};

export default ProgessBarComponent;
