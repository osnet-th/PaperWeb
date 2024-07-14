import {Meta, StoryObj} from "@storybook/react";
import {SignInPage} from "./SignInPage";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "Pages/SignInPage",
    component: SignInPage,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof SignInPage>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;