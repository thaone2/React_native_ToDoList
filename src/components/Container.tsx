import {View, Text, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}

const Container = (props: Props) => {
  const {title, back, right, children} = props;

  return (
    <ScrollView style={[globalStyles.container, {paddingTop: 22}]}>
      {children}
    </ScrollView>
  );
};

export default Container;
