import { useTheme } from "@emotion/react";
import styled from "@emotion/native";
import { ProgressBar } from "react-native-paper";
import { spacing, typography } from "../../config";
import { View } from "react-native";
import { currencyFormat } from "../../utils/common";
import React from "react";
import { FundingProgressViewProps } from "./funding-progress-view.props";

const FundingProgressView: React.FC<FundingProgressViewProps> = props => {
  const theme = useTheme();

  const StyledProgressBar = styled(ProgressBar)({
    marginTop: spacing[1],
    marginBottom: spacing[3],
    borderRadius: 5,
  });

  const CurrencyText = styled.Text(props => ({
    color: props.theme.text[300],
    fontFamily: typography.primary.medium,
  }));

  const StyledText = styled.Text(props => ({
    color: props.theme.text[100],
  }));

  return (
    <View>
      <StyledText>
        <CurrencyText>{currencyFormat(props.currentAmount)}</CurrencyText>
        {" raised of "}
        <CurrencyText>{currencyFormat(props.goalAmount)}</CurrencyText> goal
      </StyledText>
      <StyledProgressBar
        color={theme.palette.amber[700] as string}
        progress={props.currentAmount / props.goalAmount}
      />
    </View>
  );
};

export default FundingProgressView;
