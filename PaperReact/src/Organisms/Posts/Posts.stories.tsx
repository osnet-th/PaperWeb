import {Posts} from "./Posts";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Organisms/Posts",
    component: Posts
} satisfies Meta<typeof Posts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;