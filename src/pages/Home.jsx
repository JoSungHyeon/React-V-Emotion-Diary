import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button"
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

const getMonthlyData = (pivotDate, data) => {

    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime(); // 해당 달의 처음 날짜 처음 시간

    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime(); // 해당 달의 마지막 날짜 마지막 시간

    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
}

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    usePageTitle("SH-EmotionDiary")

    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };
    
    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
            leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
            rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
            />
            <DiaryList data={monthlyData}/>
        </div>
    )
};

export default Home;