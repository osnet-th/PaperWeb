import {LoginTemplate} from "./LoginTemplate";
import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title : "Templates/Login",
    component: LoginTemplate,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof LoginTemplate>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;