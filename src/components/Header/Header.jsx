import s from './Header.module.scss'
import image from '../../img/image.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import View from '../View/View';
export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            {isOpen && <View />}
            <div className={s.satisfies}>
                <div className={s.background_image}>
                    <div className={s.profile_all}>
                        <div className={s.profile_flex}>
                            <div className={s.profile_img}>
                                <img src={image} alt="" />
                            </div>
                            <div className={s.profile_grid_text}>
                                <h2>Franklin Jr</h2>
                                <h4>UI / UX Designer</h4>
                                <p>Medan, Sumatera Utara - ID</p>
                            </div>
                            <div className={s.btn2}>
                                <Button variant="contained" disableElevation onClick={() => setIsOpen(true)} >
                                    Disable elevation
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
