import {ButtonA} from "./Button";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Atoms/Button",
    component: ButtonA
} satisfies Meta<typeof ButtonA>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args : {
        label:"TEST"
    }
} satisfies Story;