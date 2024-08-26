import { ProjectCarouselTemplate} from "./ProjectCarouselTemplate";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Templates/ProjectCarouselTemplate",
    component: ProjectCarouselTemplate
} satisfies Meta<typeof ProjectCarouselTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;
