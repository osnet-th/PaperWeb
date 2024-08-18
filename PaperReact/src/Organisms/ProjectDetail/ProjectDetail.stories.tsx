import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {ProjectDetail} from "./ProjectDetail";

const meta = {
    title: "Organisms/ProjectDetail",
    component: ProjectDetail,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof ProjectDetail>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;