import {Meta, StoryObj} from "@storybook/react";
import {TextInput} from "./TextInput";



const meta = {
    title: "Atoms/TextInput",
    component: TextInput,
} satisfies Meta<typeof TextInput>;
export default meta;


type Story = StoryObj<typeof meta>;

export const Basic = {
    args: {
        type: "email"
    }
} satisfies Story;
