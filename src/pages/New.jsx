import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom"; 
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    usePageTitle("SH-EmotionDiary");

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content);
        
        nav("/", {replace: true}) // onSubmit 함수 실행 시 홈페이지로 이동, 뒤로가기 방지
    };

    return (
        <div>
            <Header title={"새 일기 쓰기"}
                leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로 가기"} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    )
};

export default New;