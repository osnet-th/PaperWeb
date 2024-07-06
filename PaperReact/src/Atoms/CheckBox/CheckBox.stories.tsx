import {CheckBox} from "./CheckBox";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Atoms/CheckBox",
    component: CheckBox
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args : {
        label: "Remember Me"
    }
} satisfies Story;