import {LabelInput} from "../../Molecules/LabelInput/LabelInput";
import {LabelMultilineText} from "../../Molecules/LabelMultilineText/LabelMultilineText";
import React from "react";
import {LabelImageList} from "../../Molecules/LabelImageList/LabelImageList";


export const ProjectWrite = () => {
    return <div>
        <LabelInput label="제목" type="text" />
        <LabelImageList/>
        <LabelMultilineText label="프로젝트 내용"/>
    </div>
}