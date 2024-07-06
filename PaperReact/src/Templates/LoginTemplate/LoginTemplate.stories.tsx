import {LoginTemplate} from "./LoginTemplate";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title : "Templates/Login",
    component: LoginTemplate
} satisfies Meta<typeof LoginTemplate>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;