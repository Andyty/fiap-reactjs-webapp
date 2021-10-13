import React, { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CourseCard, ICourseCardProps } from '../../Components/CourseCard/CourseCard';
import { ICourse } from '../../Models/ICourse';
import { useHistory } from "react-router";
import "./HomeView.scss"

export interface IHomeViewProps {
    coursesList: ICourse[];
};

export const HomeView: React.FC<IHomeViewProps> = (props: IHomeViewProps) => {

    const history = useHistory();

    const getCourseCardElement = (course: ICourse): ReactElement => {
        const onCardClick = () => {
            history.push(`./course/${course.id}`);
        }
        const courseCardProps: ICourseCardProps = {
            name: course.name,
            description: course.description,
            discount: course.discount,
            image_url: course.image_url,
            onCardClick: onCardClick
        }
        return (
            <Col className="homeview-col">
                <CourseCard {...courseCardProps} />
            </Col>
        )
    }

    return (
        <Container id="homeview-container">
            <Row xs={1} md={2} lg={3}>
                {props.coursesList?.map(getCourseCardElement)}
            </Row>
        </Container>
    );
};