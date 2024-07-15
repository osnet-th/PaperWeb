import {Introduction} from "./Introduction";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Organisms/Introduction",
    component: Introduction
} satisfies Meta<typeof Introduction>;


export default meta;


type Story = StoryObj<typeof meta>;



const mainFeaturedPost = {
    title: '방문해주셔서 감사합니다.',
    description:
        "개인 포트폴리오 페이지입니다. 하단 github 에서 소스코드 확인가능합니다.\n" +
        "관리자 인증 시, 프로젝트 게시글 작성",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

export const Basic = {
    args : {
        post : mainFeaturedPost
    }
} satisfies Story;