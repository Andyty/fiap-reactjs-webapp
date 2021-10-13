import React, {useEffect} from 'react';
import { HomeView } from './HomeView';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import {searchCourses} from "../../store/modules/course/actions";

export interface IHomeControllerProps {
};

const HomeController: React.FC<IHomeControllerProps> = (props: IHomeControllerProps) => {
    const courses = useSelector((state: RootStateOrAny) => state.courseInfo.courses);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchCourses())
    }, [])

    return <HomeView coursesList={courses} />
};

export default HomeController;