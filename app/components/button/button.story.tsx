import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  Docs,
  PropsData,
  Story,
  StoryScreen,
  UseCase,
} from "../../../storybook/views";
import Button from "./button";

declare let module: any;

const description = `
  This is a button component that allows diffrent kinds of buttons.
  The button kinds are \`primary\`, \`secondary\`, \`tertiary\`.
`;

const propsData: PropsData = [
  ["kind", "The button kind `primary | secondary | tertiary`", "primary"],
  ["fontSize", "the button text font size `number`", "14"],
  ["style", "Container style overrides `ViewStyle`", "-"],
];

storiesOf("Button", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="Button" description={description} propsData={propsData} />
  ))
  .add("Behaviour", () => (
    <Story>
      <UseCase title="Primary title">
        <Button type="primary">Primary</Button>
      </UseCase>
      <UseCase title="Secondary title">
        <Button type="secondary">Secondary</Button>
      </UseCase>
      <UseCase title="Accent title">
        <Button type="accent">Accent</Button>
      </UseCase>
      <UseCase title="Disabled primary button">
        <Button disabled type="primary">
          I am disabled
        </Button>
      </UseCase>
      <UseCase title="Disabled secondary button">
        <Button disabled type="secondary">
          I am also disabled
        </Button>
      </UseCase>
      <UseCase title="Disabled accent button">
        <Button disabled type="accent">
          I am also disabled
        </Button>
      </UseCase>
    </Story>
  ));
