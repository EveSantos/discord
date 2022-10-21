import react from 'react';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>
            <Separator/>
            <ServerButton hasNotification/>
            <ServerButton hasMention/>
            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton hasNotification/>
            <ServerButton/>
            <ServerButton hasMention/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
        </Container>
    );
}

export default ServerList;