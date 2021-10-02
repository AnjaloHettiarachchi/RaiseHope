import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { Docs, StoryScreen } from "../../../storybook/views";

declare let module: any;

const description = `
  This is a wrapper around React Native \`Picker\` component. It can display a label if given one, and an error message below the input if the error argument is set to true.
`;

storiesOf("Picker", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("📖 Docs", () => (
    <Docs title="Input" description={description} propsData={[]} />
  ));
