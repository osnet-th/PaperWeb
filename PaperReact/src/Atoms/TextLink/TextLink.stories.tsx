import {TextLink} from "./TextLink";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Atoms/TextLink",
    component: TextLink
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args: {
        text: "Forgot your password?",
        path: "/"
    }
} satisfies Story;