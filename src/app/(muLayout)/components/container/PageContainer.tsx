import { HelmetProvider, Helmet } from 'react-helmet-async';
import React, { ReactNode } from 'react';

type Props = {
    description?: string;
    children: ReactNode | ReactNode[];
    title?: string;
};

const PageContainer: React.FC<Props> = ({ title, description, children }: Props) => (
    <HelmetProvider>
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            {children}
        </div>
    </HelmetProvider>
);

export default PageContainer;
