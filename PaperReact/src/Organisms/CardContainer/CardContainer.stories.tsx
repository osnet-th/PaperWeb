import {CardContainer} from "./CardContainer";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Organisms/CardContainer",
    component: CardContainer
} satisfies Meta<typeof CardContainer>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {
    args: {
        photo: "",
        items: []
    }
} satisfies Story;
