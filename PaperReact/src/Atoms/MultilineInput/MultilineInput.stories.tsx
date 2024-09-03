
import {Meta, StoryObj} from "@storybook/react";
import {MultilineInput} from "./MultilineInput";
import {fn} from "@storybook/test";

const meta= {
    title: "Atoms/MultilineInput",
    component: MultilineInput
} satisfies Meta<typeof MultilineInput>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic= {
    args : {
        text: "",
        onChange: fn,
        readOnly: false,
        minRows: "30",
    }
} satisfies Story;