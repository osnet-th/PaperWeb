import {LoginInput} from "./LoginInput";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Organisms/LoginInput",
    component: LoginInput
} satisfies Meta<typeof LoginInput>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;