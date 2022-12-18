
import './header.scss';

import Navigation from '../../../navigation/navigation';

const Header = ({toPage}) => {

    return (
        <header className="headerWrapper">
            <Navigation logo='white' toPage={toPage}/>
        </header>
    );
}

export default Header;