import { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        const $title = document.getElementsByTagName("title")[0]; // 돔 요소가 저장될 시 $ 추가
        $title.innerText = title;
    }, [title]);
}


export default usePageTitle;