import {Meta, StoryObj} from "@storybook/react";
import {LabelImageList} from "./LabelImageList";
import {fn} from "@storybook/test";

const meta = {
    title: "Molecules/LabelImageList",
    component: LabelImageList
} satisfies Meta<typeof LabelImageList>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
    args : {
        imageUpload: fn,
        imageDelete:fn,
        previewImg: []
    }
} satisfies Story;
