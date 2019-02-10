import React, { Component } from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import Mountain from "../Images/mountain.jpg";
const StyledView = styled.View`
  flex-direction: column;
  justify-content: center;
`;
const HeadingHome = styled.Text`
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  left: 13px;
  top: 341px;
`;

const ContentHome = styled.Text`
  background: pink;
`;

export default class home extends Component {
  render() {
    const { viewStyles, textStyles, tempStyle } = styles;
    return (
      <StyledView>
        <View style={viewStyles}>
          <Text style={textStyles} h1>
            Heading 2
          </Text>
        </View>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../Images/mountain.jpg")}
        >
          <View>
            <HeadingHome>
              <Text style={tempStyle}>24°</Text>
              {"\n"}
              <Text>Snowy</Text>
              {"\n"}
              <Text>Feel like: 25°C</Text>
              {"\n"}
              <Text>High:28°C Low:23°C</Text>
            </HeadingHome>
          </View>
        </ImageBackground>
      </StyledView>
    );
  }
}

const styles = {
  viewStyles: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyles: {
    fontSize: 20
  },
  tempStyle: {
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.5)",
    fontSize: 80,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "lighter"
  }
};
