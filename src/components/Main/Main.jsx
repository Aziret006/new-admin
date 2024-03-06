import * as React from 'react';
import s from './Main.module.scss'
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';




const data1 = [
];

const data2 = [
  { label: '1', value: 100 },
  { label: '2', value: 300 },
  { label: '3', value: 100 },
  { label: '4', value: 80 },
  { label: '5', value: 40 },
  { label: '6', value: 30 },
  { label: '7', value: 50 },
  { label: '8', value: 100 },
  { label: '9', value: 200 },
  { label: '10', value: 150 },
  { label: '11', value: 50 },
];


export default function Main() {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleRadius = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setRadius(newValue);
  };


  return (
    <div>
      <div className={s.Main}>
        <div className={s.main_flex}>
          <div className={s.Main_block}>
            <h3>Skills</h3>
            <Box sx={{ width: '100%', marginTop: '-30px' }}>
              <PieChart
                height={300}
                series={[
                  { data: data1, outerRadius: radius },
                  {
                    data: data2.slice(0, itemNb),
                    innerRadius: radius,
                    arcLabel: (params) => params.label ?? '',
                  },
                ]}
                skipAnimation={skipAnimation}
              />
              <FormControlLabel
                checked={skipAnimation}
                control={
                  <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
                }
                label="skipAnimation"
                labelPlacement="end"
              />
              <Typography id="input-item-number" gutterBottom>
                Number of items
              </Typography>
              <Slider
                value={itemNb}
                onChange={handleItemNbChange}
                valueLabelDisplay="auto"
                min={1}
                max={10}
                aria-labelledby="input-item-number"
              />
              <Typography id="input-radius" gutterBottom>
                Radius
              </Typography>
              <Slider
                value={radius}
                onChange={handleRadius}
                valueLabelDisplay="auto"
                min={15}
                max={100}
                aria-labelledby="input-radius"
              />
            </Box>
          </div>
          <div className={s.main_all_flex_all}>
            <div className={s.main_all_flex}>
              <div className={s.Main_text}>
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h3 className={s.h3}>Contact</h3>
                <div className={s.main_block_big_flex}>
                  <div className={s.main_block_flex}>
                    <div className={s.main_icon}>
                      <FaPhoneFlip />
                    </div>
                    <div className={s.main_text_grid}>
                      <p>Phone</p>
                      <li>1234598765</li>
                    </div>
                  </div>
                  <div className={s.main_block_flex}>
                    <div className={s.main_icon}>
                      <FaEnvelopeOpen />
                    </div>
                    <div className={s.main_text_grid}>
                      <p>Email</p>
                      <li>demo@example.com</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.main_flex_end}>
                <h3>Socials</h3>
                <div className={s.block_grid}>
                  <div className={s.whatsapp}>
                    <div className={s.block_mini}>
                      <FaWhatsappSquare size={30} color='#fff' />
                    </div>
                    <div className={s.block_mini_width}>
                      <p>Whatsapp</p>
                    </div>
                  </div>
                  <div className={s.telegramm}>
                    <div className={s.block_mini_telegramm}>
                      <FaTelegram size={30} color='#fff' />
                    </div>
                    <div className={s.block_mini_width_telegramm}>
                      <p>Telegramm</p>
                    </div>
                  </div>
                  <div className={s.Phones}>
                    <div className={s.block_mini_Phones}>
                      <FaPhoneFlip className={s.Phone} size={30} color='#fff' />
                    </div>
                    <div className={s.block_mini_width_Phones}>
                      <p>Phone </p>
                    </div>
                  </div>
                  <div className={s.Message}>
                    <div className={s.block_mini_Message}>
                      <RiMessage2Fill size={30} color='#fff' />
                    </div>
                    <div className={s.block_mini_width_Message}>
                      <p>Message</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.block_grey}>
              <div>
                <h3>Upload Your Curriculum Vitae</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
              </div>
              <div className={s.iconka}>
                <FaArrowUp size={30} color='#fff' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
