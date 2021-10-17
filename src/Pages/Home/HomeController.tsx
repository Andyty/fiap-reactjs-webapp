import React, { useEffect } from 'react';
import { HomeView } from './HomeView';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { searchCourses } from "../../store/modules/course/actions";
import { useHistory } from "react-router";

export interface IHomeControllerProps {
};

const HomeController: React.FC<IHomeControllerProps> = (props: IHomeControllerProps) => {
    const userInfo = useSelector((state: RootStateOrAny) => state.userInfox?.info ?? null);
    const courses = useSelector((state: RootStateOrAny) => state.courseInfo.courses);
    const dispatch = useDispatch();

    const history = useHistory();

    if (!userInfo?.isLogged) {
        history.push('/login');
    }

    useEffect(() => {
        dispatch(searchCourses())
    }, [])

    return <HomeView coursesList={courses} />
};

export default HomeController;