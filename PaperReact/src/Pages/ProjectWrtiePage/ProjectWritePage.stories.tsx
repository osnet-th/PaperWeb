import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {ProjectWritePage} from "./ProjectWritePage";

const meta = {
    title: "Pages/ProjectWritePage",
    component: ProjectWritePage,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof ProjectWritePage>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;