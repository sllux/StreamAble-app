import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { rgba } from "polished";

export const Container = styled.View`
  margin-bottom: 15px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`;

export const SettingsCard = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 25px;
  margin-bottom: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => rgba(theme.base.mainColor, 0.8)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsCardTitle = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.text.font.secondary}
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
`;

export const SettingsCardIcon = styled(Icon).attrs({
  name: "arrow-down",
})`
  font-size: 25px;
  color: ${({ theme }) => theme.text.primary};
`;
