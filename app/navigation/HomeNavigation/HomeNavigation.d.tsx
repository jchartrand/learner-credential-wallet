import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CredentialRecordRaw } from '../../model/credential';

import type {
  AddNavigationParamList,
  CredentialNavigationParamList,
  SettingsNavigationParamList,
} from '../';


export type HomeNavigationParamList = {
  CredentialNavigation: NavigatorScreenParams<CredentialNavigationParamList>;
  ShareNavigation: undefined;
  AddNavigation: NavigatorScreenParams<AddNavigationParamList>;
  SettingsNavigation: NavigatorScreenParams<SettingsNavigationParamList>;
  DebugScreen: {
    rawCredentialRecord: CredentialRecordRaw;
  };
};

export type CredentialNavigationProps = BottomTabScreenProps<HomeNavigationParamList, 'CredentialNavigation'>;
export type ShareNavigationProps = BottomTabScreenProps<HomeNavigationParamList, 'ShareNavigation'>;
export type AddNavigationProps = BottomTabScreenProps<HomeNavigationParamList, 'AddNavigation'>;
export type SettingsNavigationProps = BottomTabScreenProps<HomeNavigationParamList, 'SettingsNavigation'>;

export type TabIconProps = {
  color: string;
}
