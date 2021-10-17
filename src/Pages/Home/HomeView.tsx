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
            //TODO mudar pra name
            history.push(`./course/${course.id}`, {course: course});
        }
        const courseCardProps: ICourseCardProps = {
            nome: course.nome,
            descricao: course.descricao,
            porc_desconto: course.porc_desconto,
            url_imagem: course.url_imagem,
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