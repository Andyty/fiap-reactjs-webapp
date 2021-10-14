import React from 'react';
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap';
import { ICourseDetail, ICourseModule, ICourseModuleContent } from '../../Models/ICourseDetail';
import "./CourseDetailView.scss";

export interface ICourseDetailViewProps {
    courseDetail?: ICourseDetail
};

export const CourseDetailView: React.FC<ICourseDetailViewProps> = (props: ICourseDetailViewProps) => {
    return (
        <Container id="course-detail-container">
            <h2 className="mt-5 mb-2">{props.courseDetail?.nome}</h2>
            <h5 className="mb-4">{props.courseDetail?.nivel}</h5>
            <Card id="course-detail-card">
                {props.courseDetail?.porcDesconto &&
                    <div id="discount-overlay">
                        <span id="promo-price-label">{`R$${props.courseDetail?.precoPromocional}`}</span>
                        <span id="original-price-label">{`R$${props.courseDetail?.precoOriginal}`}</span>
                    </div>
                }
                <Card.Img id="course-detail-card-img" variant="top" src={/*props.courseDetail?.urlImagem ??*/ "/courseImage.png"}></Card.Img>
            </Card>
            <Accordion id="course-detail-accordion">
                {props.courseDetail?.modulos?.map((modulo: ICourseModule, index: number) =>
                    <Accordion.Item className="course-detail-accordion-item" eventKey={index.toString()}>
                        <Accordion.Header className="course-detail-accordion-header">
                            <div className="course-detail-module-title">
                                <div>{modulo.nome}</div>
                                <div>{modulo.carga_horaria}</div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {modulo.conteudos.map((conteudo: ICourseModuleContent) =>
                                    <ListGroup.Item>{conteudo.descricao}</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Container>
    );
};