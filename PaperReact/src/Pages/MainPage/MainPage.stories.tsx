import {Meta, StoryObj} from "@storybook/react";
import {MainPage} from "./MainPage";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "Pages/MainPage",
    component: MainPage,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof MainPage>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;