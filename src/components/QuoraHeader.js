import React from 'react'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { NotificationsOutlined, PeopleAltOutlined, Search } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import "./css/QuoraHeader.css"

function QuoraHeader() {
  return (
    <div className='qHeader'>
        <div className='qHeader-content'>
            <div className='qHeader_logo'>
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/05/e8551854-74a9-4c77-b5db-1501280fa66f.gif?auto=format&q=60&fit=max&w=930"alt="logo"/>
                <div className='qHeader_icons'>
                <div className='qHeader_icon'><HomeIcon /></div>
                <div className='qHeader_icon'><FeaturedPlayListOutlinedIcon/></div>
                <div className='qHeader_icon'><AssignmentTurnedInOutlinedIcon/></div>
                <div className='qHeader_icon'><PeopleAltOutlined/></div>
                <div className='qHeader_icon'><NotificationsOutlined/></div>
                </div>
                <div className='qHeader_input'>
                  <Search/>
                  <input type="text" placeholder='Search questions'/>
                </div>
                <div className='qHeader_Rem'>
                  <Avatar/>
                </div>
              <Button>Add Question</Button>
            </div>
        </div>
    </div>
  )
}

export default QuoraHeader