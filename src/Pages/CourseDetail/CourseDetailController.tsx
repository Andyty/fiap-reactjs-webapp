import React, { useEffect } from 'react';
import { CourseDetailView } from './CourseDetailView';
import {useLocation} from "react-router-dom";

const CourseDetailController: React.FC = () => {
    const location = useLocation()
    // @ts-ignore
    const course = location.state && location.state.course;
    console.log(course)
    return <CourseDetailView courseDetail={course} />
};

export default CourseDetailController;