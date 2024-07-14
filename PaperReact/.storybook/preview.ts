import type {Preview, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {Story} from "@storybook/blocks";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export default preview;
