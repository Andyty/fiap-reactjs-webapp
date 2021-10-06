import React from 'react';
import { CourseDetailView } from './CourseDetailView';

export interface ICourseDetailControllerProps {
    teste?: boolean;
};

const CourseDetailController: React.FC<ICourseDetailControllerProps> = (props: ICourseDetailControllerProps) => {
    return <CourseDetailView />
};

export default CourseDetailController;