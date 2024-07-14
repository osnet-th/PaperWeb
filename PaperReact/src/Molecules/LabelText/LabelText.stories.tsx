import {Meta, StoryObj} from "@storybook/react";
import {LabelText} from "./LabelText";

const meta = {
    title: "Molecules/LabelText",
    component: LabelText
} satisfies Meta<typeof LabelText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
    args: {
        label: "이름",
        text: "이태형"
    }
} satisfies Story;