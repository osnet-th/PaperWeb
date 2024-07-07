import {SignUpInput} from "./SignUpInput";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Organisms/SignUpInput",
    component : SignUpInput
} satisfies Meta<typeof SignUpInput>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic  = {
} satisfies Story;
