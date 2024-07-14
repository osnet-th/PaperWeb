import {Meta, StoryObj} from "@storybook/react";
import {SignUpPage} from "./SignPage";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "Pages/SignUpPage",
    component: SignUpPage,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof SignUpPage>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;