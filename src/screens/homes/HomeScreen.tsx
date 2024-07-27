import {
  Add,
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CardComponent from '../../components/CardComponent';
import Container from '../../components/Container';
import RowComponent from '../../components/RowComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import TagComponent from '../../components/TagComponent';
import SpaceComponent from '../../components/SpaceComponent';
import CicularComponent from '../../components/CicularComponent';
import CardImageComponent from '../../components/CardImageComponent';
import AvatarGroup from '../../components/AvatarGroup';
import ProgessBarComponent from '../../components/ProgessBarComponent';
import {fontFamilies} from '../../constants/fontFamilies';
import SectionComponent from '../../components/SectionComponent';
import SearchScreen from '../SearchScreen';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Container>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 size={24} color={colors.desc} />
            <Notification size={24} color={colors.desc} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TextComponent text="Hi, Thạo" />
          {/* <TitleComponent text="Be Productive today" /> */}
          <TitleComponent text="Hello Huỳnh Minh Thạo" />
        </SectionComponent>
        <SectionComponent>
          <RowComponent
            styles={[globalStyles.inputContainer]}
            onPress={() => navigation.navigate(SearchScreen)}>
            <TextComponent color="#696B6F" text="Search task" />
            <SearchNormal1 size={20} color={colors.desc} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <CardComponent>
            <RowComponent>
              <View style={{flex: 1}}>
                <TitleComponent text="Task progress" />
                <TextComponent text="30/40 tasks done" />
                <SpaceComponent height={12} />
                <RowComponent justify="flex-start">
                  <TagComponent
                    text="Match 22"
                    onPress={() => console.log('Say Hi!!!')}
                  />
                </RowComponent>
              </View>
              <View>
                <CicularComponent value={80} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent styles={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="UX Design" />
                <TextComponent text="Task managerment mobile app" size={12} />

                <View style={{marginVertical: 28}}>
                  <AvatarGroup />
                  <ProgessBarComponent
                    percent="80%"
                    color="#0AACFF"
                    size="large"
                  />
                </View>
                <TextComponent
                  text="Due, 2024 Argust 10"
                  size={12}
                  color={colors.desc}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={18} />
            <View style={{flex: 1}}>
              <CardImageComponent color="rgba(33, 150, 243, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" size={18} />
                <AvatarGroup />
                <ProgessBarComponent percent="40%" color="#A2F068" />
              </CardImageComponent>
              <SpaceComponent height={16} />
              <CardImageComponent color="rgba(18, 181, 22, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update Word" />
                <TextComponent text="Revision home page" size={12} />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SpaceComponent height={16} />
        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.bold}
            size={21}
            text="Urgents tasks"
          />
          <CardComponent>
            <RowComponent>
              <CicularComponent value={80} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('AddNewTask')}
          style={[
            globalStyles.row,
            {
              backgroundColor: 'green',
              borderRadius: 100,
              padding: 10,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new task" flex={0} />
          <Add size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
