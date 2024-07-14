import {PostsTemplate} from "./PostsTemplate";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Templates/PostsTemplate",
    component: PostsTemplate
} satisfies Meta<typeof PostsTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;