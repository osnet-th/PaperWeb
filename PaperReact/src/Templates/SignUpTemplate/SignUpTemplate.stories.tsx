import {Meta, StoryObj} from "@storybook/react";
import {SignUpTemplate} from "./SignUpTemplate";

const meta = {
    title: "Templates/SignUpTemplate",
    component : SignUpTemplate
} satisfies Meta<typeof SignUpTemplate>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic  = {
} satisfies Story;
