import {Meta, StoryObj} from "@storybook/react";
import {ImageListIndex} from "./ImageListIndex";
import {fn} from "@storybook/test";

const meta = {
    title: "Atoms/ImageListIndex",
    component: ImageListIndex
} satisfies Meta<typeof ImageListIndex>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args : {
        imageDelete: fn,
        imgList: [
        'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
         'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
         'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
        ]
    }
} satisfies Story;