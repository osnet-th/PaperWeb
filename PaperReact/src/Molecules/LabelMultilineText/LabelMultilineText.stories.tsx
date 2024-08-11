import {LabelMultilineText} from "./LabelMultilineText";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";


const meta = {
    title: "Molecules/LabelMultilineText",
    component: LabelMultilineText
} satisfies Meta<typeof LabelMultilineText>;


export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args:{
        label: "내용",
        onChange: fn
    }
} satisfies Story;
