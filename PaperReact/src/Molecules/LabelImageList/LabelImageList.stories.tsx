import {Meta, StoryObj} from "@storybook/react";
import {LabelImageList} from "./LabelImageList";

const meta = {
    title: "Molecules/LabelImageList",
    component: LabelImageList
} satisfies Meta<typeof LabelImageList>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
    args : {
        label: '사진'
    }
} satisfies Story;
