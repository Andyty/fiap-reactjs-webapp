import React from 'react';

export interface ICourseDetailViewProps {
    teste?: boolean;
};

export const CourseDetailView: React.FC<ICourseDetailViewProps> = (props: ICourseDetailViewProps) => {
    return (
        <div>
            <h1>CourseDetail Page</h1>
        </div>
    );
};