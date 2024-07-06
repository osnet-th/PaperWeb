import {Label} from "./Label";
import {Meta, StoryObj} from "@storybook/react";

const meta= {
    title: "Atoms/Label",
    component: Label
} satisfies Meta<typeof Label>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic= {
    args: {
        label: "Email"
    }
} satisfies Story;