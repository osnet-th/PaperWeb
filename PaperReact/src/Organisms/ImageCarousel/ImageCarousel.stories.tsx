import {ImageCarousel} from "./ImageCarousel";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

const meta = {
    title: "Organisms/ImageCarousel",
    component: ImageCarousel
} satisfies Meta<typeof ImageCarousel>

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args: {
        items : [],
        onClick: fn
    }
} satisfies Story;