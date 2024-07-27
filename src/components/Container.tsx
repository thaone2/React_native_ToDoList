// import {View, Text, ScrollView} from 'react-native';
// import React, {ReactNode} from 'react';
// import {globalStyles} from '../styles/globalStyles';
// import {useNavigation} from '@react-navigation/native';

// interface Props {
//   title?: string;
//   back?: boolean;
//   right?: ReactNode;
//   children: ReactNode;
// }

// const Container = (props: Props) => {
//   const {title, back, right, children} = props;
//   const navigation: any = useNavigation();

//   return (
//     <ScrollView style={[globalStyles.container, {paddingTop: 22}]}>
//       {children}
//     </ScrollView>
//   );
// };

// export default Container;

import {ArrowLeft2} from 'iconsax-react-native';
import React, {ReactNode} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}

const Container = (props: Props) => {
  const {title, back, right, children} = props;

  const navigation: any = useNavigation();

  return (
    <View style={[globalStyles.container]}>
      {/* Header container */}

      <RowComponent
        styles={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft2 size={24} color={colors.text} />
          </TouchableOpacity>
        )}
        <View style={{flex: 1, zIndex: -1}}>
          {title && (
            <TextComponent
              flex={0}
              font={fontFamilies.bold}
              size={16}
              text={title}
              styles={{textAlign: 'center', marginLeft: back ? -24 : 0}}
            />
          )}
        </View>
      </RowComponent>

      <ScrollView style={{flex: 1}}>{children}</ScrollView>
    </View>
  );
};

export default Container;
