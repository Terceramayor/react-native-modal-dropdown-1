declare module "react-native-modal-dropdown" {
  import * as React from "react";
  import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";
  export interface PositionStyle {
    top?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
  }

  export interface ModalDropdownProps<T = any> extends ViewProps {
    renderRightComponent: Function;
    renderRowProps: any;
    dropdownListProps: any;
    disabled?: boolean;
    defaultIndex?: number;
    defaultValue?: string;
    options?: T[];
    animated?: boolean;
    scrollEnabled?: boolean;
    showsVerticalScrollIndicator?: boolean;
    textStyle?: StyleProp<TextStyle>;
    dropdownStyle?: StyleProp<ViewStyle>;
    dropdownTextStyle?: StyleProp<TextStyle>;
    dropdownTextHighlightStyle?: StyleProp<TextStyle>;
    adjustFrame?: (positionStyle: PositionStyle) => PositionStyle;
    renderRow?: (
      option: T,
      index: string,
      isSelected: boolean
    ) => React.ReactNode;
    renderSeparator?: (
      sectionID: string,
      index: string,
      adjacentRowHighlighted: boolean
    ) => React.ReactNode;
    renderButtonText?: (text: string) => string;
    onDropdownWillShow?: () => void | boolean;
    onDropdownWillHide?: () => void | boolean;
    onSelect?: (index: string, option: T) => void | boolean;
    accessible?: boolean;
    keyboardShouldPersistTaps?: "always" | "never" | "handled";
  }

  export default class ModalDropdown<T = any> extends React.Component<
    ModalDropdownProps<T>
  > {
    show(): void;
    hide(): void;
    select(index: number): void;
  }
}
