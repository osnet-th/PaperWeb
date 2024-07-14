import {ImageCarouselTemplate} from "./ImageCarouselTemplate";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Templates/ImageCarouselTemplate",
    component: ImageCarouselTemplate
} satisfies Meta<typeof ImageCarouselTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;
