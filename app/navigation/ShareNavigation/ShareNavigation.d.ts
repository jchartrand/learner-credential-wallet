import type { StackScreenProps } from '@react-navigation/stack';

import type { Credential } from '../../types/credential';

export type ShareNavigationParamsList = {
  ShareHomeScreen: undefined;
  PresentationPreviewScreen: {
    selectedCredentials: Credential[];
  };
  ShareCredentialPreviewScreen: {
    credential: Credential;
  };
};

export type ShareHomeScreenProps = StackScreenProps<ShareNavigationParamsList, 'ShareHomeScreen'>;
export type PresentationPreviewScreenProps = StackScreenProps<ShareNavigationParamsList, 'PresentationPreviewScreen'>;
export type ShareCredentialPreviewScreenProps = StackScreenProps<ShareNavigationParamsList, 'ShareCredentialPreviewScreen'>;
