import React from "react";
import { Card } from "react-bootstrap";

export interface ICourseCardProps {
    image?: string;
    title: string;
    description: string;
    discount?: string;
}

export const CourseCard: React.FC<ICourseCardProps> = (props: ICourseCardProps) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image ?? "/courseImage.png"}></Card.Img>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}