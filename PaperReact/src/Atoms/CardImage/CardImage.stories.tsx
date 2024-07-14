import {Meta, StoryObj} from "@storybook/react";
import {CardImage} from "./CardImage";
import img from "./img.png"

const meta = {
    title: "Atoms/CardImage",
    component: CardImage
} satisfies Meta<typeof CardImage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args: {
        img: img
    }
} satisfies Story;