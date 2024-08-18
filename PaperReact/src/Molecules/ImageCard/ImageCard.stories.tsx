import {ImageCard} from "./ImageCard";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Molecules/ImageCard",
    component: ImageCard
} satisfies Meta<typeof ImageCard>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
    args : {
        id: 1,
        title: "Lizard",
        summary: "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
            "species, ranging across all continents except Antarctica",
        img: ""
    }
} satisfies Story;
