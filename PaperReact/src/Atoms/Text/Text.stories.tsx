import {Text} from "./Text";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title: "Atoms/Text",
    component: Text
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args: {
        text: "Projects"
    }
} satisfies Story;
