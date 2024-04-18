import {Card, CardProps} from "@mui/material";
import React, {ReactNode} from "react";

type Props = {
    className?: string;
    children: ReactNode | ReactNode[];
} & CardProps;

const BlankCard: React.FC<Props> = ({children, className, ...rest}) => {
    return (
        <Card
            sx={{p: 0, position: "relative"}}
            className={className}
            elevation={9}
            variant={undefined}
            {...rest}
        >
            {children}
        </Card>
    );
};

export default BlankCard;
