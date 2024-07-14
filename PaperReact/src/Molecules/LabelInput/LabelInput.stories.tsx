import {LabelInput} from "./LabelInput";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Molecules/LabelInput",
    component: LabelInput
} satisfies Meta<typeof LabelInput>

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic = {
    args: {
        label: "Email",
        type: "email"
    }
} satisfies Story;