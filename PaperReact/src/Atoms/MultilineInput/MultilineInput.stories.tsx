
import {Meta, StoryObj} from "@storybook/react";
import {MultilineInput} from "./MultilineInput";

const meta= {
    title: "Atoms/MultilineInput",
    component: MultilineInput
} satisfies Meta<typeof MultilineInput>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic= {
} satisfies Story;