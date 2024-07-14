import {AboutMeTemplate} from "./AboutMeTemplate";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title: "Template/AboutMeTemplate",
    component: AboutMeTemplate
} satisfies Meta<typeof AboutMeTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic = {} satisfies Story;