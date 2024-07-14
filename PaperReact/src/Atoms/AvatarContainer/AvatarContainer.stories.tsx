import {AvatarContainer} from "./AvatarContainer";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Atoms/AvatarContainer",
    component: AvatarContainer
} satisfies Meta<typeof AvatarContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;