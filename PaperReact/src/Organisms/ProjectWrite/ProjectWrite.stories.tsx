import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {ProjectWrite} from "./ProjectWrite";

const meta = {
    title: "Organisms/ProjectWrite",
    component: ProjectWrite,
    decorators : [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof ProjectWrite>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;