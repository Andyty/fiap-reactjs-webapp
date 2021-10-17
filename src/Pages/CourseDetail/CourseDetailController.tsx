import React, { useEffect } from 'react';
import { CourseDetailView } from './CourseDetailView';
import {useLocation} from "react-router-dom";
import {RootStateOrAny, useSelector} from "react-redux";
import {useHistory} from "react-router";

const CourseDetailController: React.FC = () => {
    const userInfo = useSelector((state: RootStateOrAny) => state.userInfox.info);
    const history = useHistory();
    const location = useLocation()

    if (!userInfo.isLogged) {
        history.push('/login');
    }

    // @ts-ignore
    const course = location.state && location.state.course;
    console.log(course)
    return <CourseDetailView courseDetail={course} />
};

export default CourseDetailController;