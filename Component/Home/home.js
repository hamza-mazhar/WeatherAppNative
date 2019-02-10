import React, { Component } from "react";
import { Text, View, Image, ImageBackground, StatusBar } from "react-native";
import styled from "styled-components/native";
import Mountain from "../Images/mountain.jpg";
import { robotoWeights } from "react-native-typography";
import { materialColors } from "react-native-typography";

const StyledView = styled.View`
  flex-direction: column;
  justify-content: center;
`;
const HeadingHome = styled.Text`
  justify-content: center;
  width: 100%;
  left: 13px;
  top: 165%;
`;

const ContentHome = styled.Text`
  background: pink;
`;

export default class home extends Component {
  render() {
    const { viewStyles, textStyles, tempStyle, snowyStyle, feelStyle } = styles;
    return (
      <StyledView>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../Images/mountain.jpg")}
        >
          <View style={viewStyles}>
            <Text style={textStyles} h1>
              Heading 2
            </Text>
          </View>
          <View>
            <HeadingHome>
              <Text style={tempStyle}>24°</Text>
              {"\n"}
              <Text style={snowyStyle}>Snowy</Text>
              {"\n"}
              <Text style={feelStyle}>Feel like: 25°C</Text>
              {"\n"}
              <Text style={feelStyle}>High: 28°C Low: 23°C </Text>
            </HeadingHome>
          </View>
        </ImageBackground>
      </StyledView>
    );
  }
}

const styles = {
  viewStyles: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    shadowColor: "#000",
    height: 50
  },
  textStyles: {
    fontSize: 20
  },
  tempStyle: {
    ...robotoWeights.thin,
    fontSize: 80,
    color: materialColors.whitePrimary
  },
  snowyStyle: {
    ...robotoWeights.thin,
    fontSize: 30,
    color: materialColors.whitePrimary,
    fontWeight: "bold"
  },
  feelStyle: {
    ...robotoWeights.light,
    fontSize: 18,
    color: materialColors.whitePrimary,
    fontWeight: "bold"
  }
};
