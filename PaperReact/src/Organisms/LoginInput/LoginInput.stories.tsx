import {LoginInput} from "./LoginInput";
import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "Organisms/LoginInput",
    component: LoginInput,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof LoginInput>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;