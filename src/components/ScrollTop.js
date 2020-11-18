import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollTop = () => {
    const { pathname } = useHistory();
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])
    return null;
}

export default ScrollTop;