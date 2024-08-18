import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {ProjectDetailPage} from "./ProjectDetailPage";

const meta = {
    title: "Pages/ProjectDetailPage",
    component: ProjectDetailPage,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof ProjectDetailPage>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;