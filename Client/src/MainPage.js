import React from 'react';

import './MainPage.css'
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link,Outlet } from "react-router-dom";
function MainPage() {


  
  return (
    <>
    <Sidebar/>
    <div className='MainPage-main'>
      
       
              <div class="MainPage-banner-area">
        <div class="MainPage-banner-text">
        <h1>Project Homepage</h1>
                <div className='MainPage-b'>
                <div className='MainPage-bt1'>
                    <img src="https://png.pngtree.com/png-vector/20190701/ourmid/pngtree-reports-icon-for-your-project-png-image_1532801.jpg"></img>
                    <Link to="/TaskList">My Tasks</Link>
                    </div>
                    <div className='MainPage-bt1'>
                    <img src="https://previews.123rf.com/images/anthonycz/anthonycz1308/anthonycz130800007/21437969-note-pad-and-pencil.jpg"></img>
                    <Link to="/NotesList">My Notes</Link>
                    </div>
                    <div className='MainPage-bt1'>
                    <img src="https://media.istockphoto.com/id/1138356518/vector/clipboard-witch-checklist-wishlist-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=uPOrOwUNoMFNada3DSDbUVwq7O2t2Kq6-Y-xYF9Z44c="></img>
                    <Link to="/Reports" className="link">My Reports</Link>
                    </div>
                    </div>
                
        </div>


    </div>
    <div className='MainPage-hi'>
        <img src='https://static.vecteezy.com/system/resources/previews/006/317/719/original/time-management-concept-can-use-for-web-banner-infographics-hero-images-flat-isometric-illustration-isolated-on-white-background-vector.jpg'></img>
    </div>
      



    </div>
    </>
  );
}

export default MainPage;
