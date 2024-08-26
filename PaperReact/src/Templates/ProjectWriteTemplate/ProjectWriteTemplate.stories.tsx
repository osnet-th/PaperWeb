import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {ProjectWriteTemplate} from "./ProjectWriteTemplate";

const meta = {
    title: "Organisms/ProjectDetail",
    component: ProjectWriteTemplate,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof ProjectWriteTemplate>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;